"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isAuthenticated: boolean | null;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const authState =
        localStorage.getItem("isAuthenticated") === "true" ||
        document.cookie
          .split(";")
          .some((item) => item.trim().startsWith("auth-token="));
      setIsAuthenticated(authState);
    };

    checkAuth();
  }, []);

  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    document.cookie = "auth-token=authenticated; path=/; max-age=86400";
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

export const useAuth = () => useContext(AuthContext);
