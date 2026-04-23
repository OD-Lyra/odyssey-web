console.log(">>> VERCEL EXECUTION CHECK - ERIK 13:40 <<<");
import { NextRequest, NextResponse } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "fr";

function getLocaleFromHeader(request: NextRequest) {
  const header = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const preferred = header
    .split(",")
    .map((part) => part.trim().split(";")[0])
    .map((code) => code.split("-")[0]);

  for (const candidate of preferred) {
    if (locales.includes(candidate)) {
      return candidate;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getLocaleFromHeader(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
  ],
};