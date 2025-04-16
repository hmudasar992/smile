import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isAuthenticated")?.value;
  const isLoginPage = request.nextUrl.pathname === "/login";

  // For demo, we'll check both cookie and localStorage (via header)
  const authHeader = request.headers.get("x-auth-token");

  if (!isLoggedIn && !authHeader && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if ((isLoggedIn || authHeader) && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
