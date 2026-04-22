"use client";

import { translations, type Lang } from "../i18n";

export function Process({ lang }: { lang: Lang }) {
  const t = translations[lang].process;

  return (
    <section id="process" className="bg-black px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="font-label text-[10px] uppercase tracking-[0.5em] text-zinc-500">
          {t.sectionSubtitle}
        </p>
        <h2 className="font-editorial mt-6 max-w-3xl text-3xl tracking-tight text-white md:text-4xl">
          {t.subtitle}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.steps.map((step, index) => (
            <article
              key={step.title}
              className="border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.03]"
            >
              <p className="font-label text-[10px] uppercase tracking-[0.45em] text-zinc-500">
                {`${String(index + 1).padStart(2, "0")} ${t[step.labelKey]}`}
              </p>
              <h3 className="font-editorial mt-5 text-2xl tracking-tight text-white">
                {step.title}
              </h3>
              <p className="font-label mt-4 text-sm leading-relaxed text-zinc-400">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

