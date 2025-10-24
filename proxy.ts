import { NextRequest } from "next/server";

const locales = ["tr", "en"];
const legacyLocales = ["tr-TR", "en-US"];
const defaultLocale = "tr";

function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return defaultLocale;
  }

  // Extract locale from pathname
  const segments = pathname.split("/");
  const locale = segments[1];

  return locales.includes(locale) ? locale : defaultLocale;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle locale redirects (tr-TR -> tr, en-US -> en)
  for (const legacyLocale of legacyLocales) {
    if (
      pathname.startsWith(`/${legacyLocale}/`) ||
      pathname === `/${legacyLocale}`
    ) {
      const newLocale = legacyLocale === "tr-TR" ? "tr" : "en";
      const url = request.nextUrl.clone();
      url.pathname = pathname.replace(`/${legacyLocale}`, `/${newLocale}`);
      return Response.redirect(url);
    }
  }

  const locale = getLocale(request);

  // If the pathname already has a locale, let it pass through
  if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
    return;
  }

  // If no locale in pathname, redirect to default locale
  if (
    pathname === "/" ||
    !locales.some(loc => pathname.startsWith(`/${loc}`))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return Response.redirect(url);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, static files, api routes, favicon)
    "/((?!_next|api|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|pdf|txt|xml|css|js|woff|woff2|ttf|eot)).*)",
  ],
};
