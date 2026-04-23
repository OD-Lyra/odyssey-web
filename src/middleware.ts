import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '../i18n.config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. On vérifie si le chemin contient déjà une langue (fr ou en)
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // 2. Si la langue manque, on redirige vers la langue par défaut (fr)
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale;

    // On construit la nouvelle URL (ex: /contact -> /fr/contact)
    const redirectUrl = new URL(
      `/${locale}${pathname === '/' ? '' : pathname}`,
      request.url,
    );
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  // On ignore les fichiers statiques, l'api et les fichiers avec extensions (.png, .svg, etc.)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
