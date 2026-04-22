"use client";

import { translations, type Lang } from "../i18n";

export function Partnerships({ lang }: { lang: Lang }) {
  const t = translations[lang].partnerships;

  return (
    <section id="partners" className="bg-zinc-950 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl border border-white/10 bg-black/30 p-8 md:p-12">
        <p className="font-label text-[10px] uppercase tracking-[0.5em] text-zinc-500">
          {t.kicker}
        </p>
        <h2 className="font-editorial mt-6 max-w-3xl text-3xl tracking-tight text-white antialiased md:text-5xl">
          {t.title}
        </h2>
        <p className="font-label mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
          {t.body}
        </p>

        <div className="mt-10">
          <button
            type="button"
            className="font-label border border-purple-500/50 bg-purple-500/10 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}

