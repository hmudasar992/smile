"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authCheck = () => {
      const isAuth =
        localStorage.getItem("isAuthenticated") === "true" ||
        document.cookie
          .split(";")
          .some((item) => item.trim().startsWith("auth-token="));

      setIsAuthenticated(isAuth);
      if (!isAuth) {
        router.push("/login");
      }
    };

    authCheck();
  }, [router]);

  // Render nothing until auth check completes
  if (isAuthenticated === null) {
    return null;
  }

  // Only render children if authenticated
  return isAuthenticated ? <>{children}</> : null;
}
