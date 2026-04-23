import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { i18n, type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import { getSiteUrl } from "@/lib/siteUrl";

const editorialFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["500", "600", "700"],
});

const labelFont = Inter({
  subsets: ["latin"],
  variable: "--font-label",
  weight: ["400", "500", "600", "700"],
});

const brandFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030303",
};

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang: routeLang } = await params;
  const lang: Locale = routeLang === "en" ? "en" : "fr";
  const dictionary = await getDictionary(lang);
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        fr: "/fr",
        en: "/en",
        "x-default": "/fr",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps) {
  const { lang: routeLang } = await params;
  const htmlLang: Locale = routeLang === "en" ? "en" : "fr";
  const dictionary = await getDictionary(htmlLang);
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Odyssey",
        url: `${siteUrl}/${htmlLang}`,
        description: dictionary.seo.description,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Odyssey",
        url: `${siteUrl}/${htmlLang}`,
        inLanguage: htmlLang,
        description: dictionary.seo.description,
      },
    ],
  };

  return (
    <html lang={htmlLang}>
      <body
        className={`${editorialFont.variable} ${labelFont.variable} ${brandFont.variable} bg-black text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
