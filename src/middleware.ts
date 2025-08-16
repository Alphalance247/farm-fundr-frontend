import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("access")?.value;

  // Extract subdomain from hostname
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  // List of protected routes
  const isProtectedRoute =
    pathname.startsWith("/farmer-dashboard") ||
    pathname.startsWith("/investor-dashboard");

  if (isProtectedRoute && !token) {
    console.log("🚫 Redirecting to login - no token found");

    // Create login URL with redirect parameter
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // Add subdomain to search params for farm-page routes
  if (pathname.startsWith("/farm-page")) {
    const url = request.nextUrl.clone();
    url.searchParams.set("farm", subdomain);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/farmer-dashboard/:path*", "/investor-dashboard/:path*"],
};
