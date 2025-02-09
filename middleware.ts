// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the token from the cookies
  const authToken = request.cookies.get("auth_token")?.value;

  // Get the current path
  const { pathname } = request.nextUrl;

  // Define auth pages (pages that don't require authentication)
  const isAuthPage = pathname === "/login";

  // If no token and trying to access protected route
  if (!authToken && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If has token and trying to access auth page
  if (authToken && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
