"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isAuthenticated: boolean | null; // Now accepts null for loading state
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const authCheck = () => {
      const auth =
        typeof window !== "undefined" &&
        (localStorage.getItem("isAuthenticated") === "true" ||
          document.cookie
            .split(";")
            .some((item) => item.trim().startsWith("auth-token=")));
      setIsAuthenticated(!!auth);
    };

    authCheck();
  }, []);

  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    document.cookie = "auth-token=authenticated; path=/; max-age=3600"; // 1 hour
    setIsAuthenticated(true);
    router.push("/");
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    document.cookie =
      "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
