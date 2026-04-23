import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n.config";

function getLocaleFromHeader(request: NextRequest): (typeof i18n.locales)[number] {
  const header = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const preferred = header
    .split(",")
    .map((part) => part.trim().split(";")[0])
    .map((code) => code.split("-")[0]);

  for (const candidate of preferred) {
    if (i18n.locales.includes(candidate as (typeof i18n.locales)[number])) {
      return candidate as (typeof i18n.locales)[number];
    }
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = i18n.locales.some(
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
