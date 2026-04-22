"use client";

import { useState } from "react";
import { Navbar } from "@/src/components/Navbar";
import { translations, type Lang } from "@/src/i18n";

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = translations[lang].contact;

  return (
    <main className="min-h-screen bg-black text-zinc-100 antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-12">
        <h1 className="font-editorial text-4xl tracking-tight text-white md:text-6xl">
          {t.title}
        </h1>
        <p className="font-label mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
          {t.subtitle}
        </p>

        <form className="mt-14 space-y-10">
          <label className="block">
            <span className="font-label block text-[11px] uppercase tracking-[0.36em] text-zinc-500">
              {t.form.name}
            </span>
            <input
              type="text"
              className="font-label mt-4 w-full border-0 border-b border-zinc-700 bg-transparent pb-3 text-base text-white outline-none transition-colors focus:border-zinc-400"
            />
          </label>

          <label className="block">
            <span className="font-label block text-[11px] uppercase tracking-[0.36em] text-zinc-500">
              {t.form.email}
            </span>
            <input
              type="email"
              className="font-label mt-4 w-full border-0 border-b border-zinc-700 bg-transparent pb-3 text-base text-white outline-none transition-colors focus:border-zinc-400"
            />
          </label>

          <label className="block">
            <span className="font-label block text-[11px] uppercase tracking-[0.36em] text-zinc-500">
              {t.form.subject}
            </span>
            <input
              type="text"
              className="font-label mt-4 w-full border-0 border-b border-zinc-700 bg-transparent pb-3 text-base text-white outline-none transition-colors focus:border-zinc-400"
            />
          </label>

          <label className="block">
            <span className="font-label block text-[11px] uppercase tracking-[0.36em] text-zinc-500">
              {t.form.message}
            </span>
            <textarea
              rows={4}
              className="font-label mt-4 w-full resize-y border-0 border-b border-zinc-700 bg-transparent pb-3 text-base text-white outline-none transition-colors focus:border-zinc-400"
            />
          </label>

          <button
            type="submit"
            className="font-label border border-zinc-600 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-white transition-colors hover:border-white"
          >
            {t.form.submit}
          </button>
        </form>
      </section>
    </main>
  );
}

