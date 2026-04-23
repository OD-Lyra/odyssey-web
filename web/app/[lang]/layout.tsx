import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { i18n, type Locale } from "@/i18n.config";

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

export const metadata: Metadata = {
  title: "Odyssey",
  description: "Odyssey, emotional video engine",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030303",
};

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const htmlLang: Locale = params.lang === "en" ? "en" : "fr";

  return (
    <html lang={htmlLang}>
      <body
        className={`${editorialFont.variable} ${labelFont.variable} ${brandFont.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
