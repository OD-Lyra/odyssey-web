import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// STRATÉGIE BUNKER : On n'importe rien d'externe pour éviter le __dirname caché
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // On écrit les langues en dur pour ce test
  const locales = ['fr', 'en'];
  const defaultLocale = 'fr';

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const url = new URL(`/${defaultLocale}${pathname === '/' ? '' : pathname}`, request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
