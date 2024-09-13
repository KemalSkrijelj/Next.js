import { NextResponse } from "next/server";

export function Middleware(request: NextResponse) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/about/:path*",
};
