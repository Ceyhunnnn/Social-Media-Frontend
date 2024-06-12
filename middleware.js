import { NextResponse } from "next/server";
import routes from "./routes/routes";

export async function middleware(request) {
  const { url, nextUrl, cookies } = request;

  const { value: token } = cookies.get("next-auth.session-token") ?? {
    value: null,
  };
  if (
    nextUrl.pathname.startsWith("/_next") ||
    nextUrl.pathname.startsWith("/api") ||
    nextUrl.pathname.startsWith("/static")
  ) {
    return NextResponse.next();
  } else {
    if (nextUrl.pathname === "/") {
      if (!token) {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL(routes.feed, url));
    } else {
      if (!token) {
        return NextResponse.redirect(new URL(routes.auth, url));
      }
    }
  }
}

export const config = {
  matcher: ["/:path*"],
};
