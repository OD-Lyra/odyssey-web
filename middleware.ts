import { NextRequest, NextResponse } from "next/server";

const locales = ["fr", "en"] as const;
const defaultLocale = "fr" as const;
type Locale = (typeof locales)[number];

function getLocaleFromHeader(request: NextRequest): Locale {
  const header = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const preferred = header
    .split(",")
    .map((part) => part.trim().split(";")[0])
    .map((code) => code.split("-")[0]);

  for (const candidate of preferred) {
    if (locales.includes(candidate as Locale)) {
      return candidate as Locale;
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
