"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isAuthenticated: boolean | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  // Consolidated auth check function
  const checkAuth = () => {
    if (typeof window === "undefined") return false;

    const authCookieExists = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("auth-token="));

    const authLocalStorage = localStorage.getItem("isAuthenticated") === "true";

    return authCookieExists || authLocalStorage;
  };

  // Initialize auth state
  useEffect(() => {
    setIsAuthenticated(checkAuth());
  }, []);

  // Handle route protection
  useEffect(() => {
    if (isAuthenticated === false && window.location.pathname !== "/login") {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  const login = async () => {
    if (typeof window === "undefined") return;

    localStorage.setItem("isAuthenticated", "true");
    document.cookie =
      "auth-token=authenticated; path=/; max-age=3600; SameSite=Lax";
    setIsAuthenticated(true);
    router.replace("/");
  };

  const logout = async () => {
    if (typeof window === "undefined") return;

    localStorage.removeItem("isAuthenticated");
    document.cookie =
      "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsAuthenticated(false);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
