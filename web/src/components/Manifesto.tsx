"use client";

import { translations, type Lang } from "../i18n";

export function Manifesto({ lang }: { lang: Lang }) {
  const t = translations[lang].manifesto;

  return (
    <section id="manifesto" className="bg-black px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-label text-[10px] uppercase tracking-[0.5em] text-zinc-500 transition-colors duration-300">
          {t.title}
        </p>
        <p className="font-editorial mt-10 text-3xl leading-[1.2] tracking-tight text-white antialiased md:text-5xl lg:text-6xl">
          {t.body}
        </p>
      </div>
    </section>
  );
}

