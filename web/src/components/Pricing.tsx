"use client";

import { translations, type Lang } from "../i18n";

export function Pricing({ lang }: { lang: Lang }) {
  const t = translations[lang].pricing;

  return (
    <section id="pricing" className="bg-[#020202] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 max-w-2xl md:mb-18">
          <p className="font-label text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">
            {t.sectionSubtitle}
          </p>
          <h2 className="font-editorial mt-5 text-3xl font-medium tracking-tight text-zinc-200 md:text-4xl">
            {t.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {t.tiers.map((tier) => {
            const isPopular = "popular" in tier && Boolean(tier.popular);

            return (
              <article
                key={tier.key}
                className={[
                  "relative overflow-hidden border border-white/10 bg-white/[0.02] p-7 backdrop-blur-md transition-colors duration-300",
                  "hover:border-purple-500/50",
                  isPopular
                    ? "border-purple-500/30 shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_0_60px_rgba(124,58,237,0.18)]"
                    : "",
                ].join(" ")}
              >
                {isPopular && (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-24 opacity-80 blur-3xl"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 20%, rgba(124,58,237,0.35) 0%, rgba(139,92,246,0.16) 35%, transparent 70%)",
                      }}
                    />
                    <div className="absolute right-5 top-5 border border-purple-500/40 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.32em] text-white">
                      {t.recommended}
                    </div>
                  </>
                )}

                <header className="relative">
                  <div className="font-label text-[11px] font-bold uppercase tracking-[0.46em] text-zinc-300">
                    {t.tierTitles[tier.key]}
                  </div>
                  <div className="mt-5 flex items-baseline gap-3">
                    <div className="font-editorial text-5xl font-medium tracking-tight text-white">
                      {tier.price}
                    </div>
                    <div className="font-label text-[10px] font-bold uppercase tracking-[0.36em] text-zinc-500">
                      {tier.style}
                    </div>
                  </div>
                </header>

                <ul className="relative mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-label text-xs font-medium uppercase tracking-[0.22em] text-zinc-400"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-10">
                  <button
                    type="button"
                    className={[
                      "w-full border border-white/10 bg-black/30 px-5 py-3",
                      "font-label text-[10px] font-bold uppercase tracking-[0.5em] text-white",
                      "transition-colors duration-300 hover:border-purple-500/50 hover:bg-purple-500/10",
                    ].join(" ")}
                  >
                    {t.cta}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

