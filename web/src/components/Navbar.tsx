"use client";

import { motion } from "framer-motion";
import { Clapperboard, Languages, LogIn } from "lucide-react";
import Link from "next/link";
import { translations, type Lang } from "../i18n";

export function Navbar({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  const t = translations[lang];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="font-label fixed left-0 right-0 top-0 z-50 border-b border-zinc-900/80 bg-black/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400 transition-colors hover:text-zinc-200"
        >
          <span className="flex h-10 w-10 items-center justify-center border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors group-hover:border-zinc-600">
            <Clapperboard className="h-4 w-4" strokeWidth={1.25} aria-hidden />
          </span>
          <span className="font-brand hidden text-[18px] font-bold uppercase tracking-[0.32em] text-zinc-100 sm:inline">
            {t.header.logoFallback}
          </span>
        </Link>

        <nav className="font-label hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-white"
          >
            {t.header.nav.home}
          </Link>
          <Link
            href="#manifesto"
            className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-white"
          >
            {t.header.nav.manifesto}
          </Link>
          <Link
            href="#process"
            className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-white"
          >
            {t.header.nav.process}
          </Link>
          <Link
            href="#partners"
            className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-white"
          >
            {t.header.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-8">
          <div
            className="flex items-center gap-1 border border-zinc-800 bg-zinc-950/80 p-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
            role="group"
            aria-label={t.header.languageLabel}
          >
            <Languages className="mx-1 h-3.5 w-3.5 text-zinc-600" aria-hidden />
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={`px-2 py-1 transition-colors ${
                lang === "fr"
                  ? "bg-zinc-900 text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {t.header.langOptionFr}
            </button>
            <span className="text-zinc-800" aria-hidden>
              /
            </span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-1 transition-colors ${
                lang === "en"
                  ? "bg-zinc-900 text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {t.header.langOptionEn}
            </button>
          </div>

          <Link
            href="/contact"
            className="font-label group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400 transition-colors hover:text-white"
          >
            <LogIn className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            <span className="underline-offset-4 transition-all group-hover:underline">
              {t.header.login}
            </span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

