"use client";

import { motion } from "framer-motion";
import { translations, type Lang } from "../i18n";
import { LOCOMOTIVE_EASE, CINEMATIC_VIEWPORT } from "../lib/cinematicMotion";
import { CinematicWordReveal } from "./CinematicWordReveal";

const KICKER_DURATION = 0.85;

export function Pricing({ lang }: { lang: Lang }) {
  const t = translations[lang].pricing;

  return (
    <section id="pricing" className="bg-[#020202] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div key={lang}>
          <div className="mb-14 max-w-2xl md:mb-18">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={CINEMATIC_VIEWPORT}
              transition={{ duration: KICKER_DURATION, ease: LOCOMOTIVE_EASE }}
              className="font-label text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500"
            >
              {t.sectionSubtitle}
            </motion.p>
            <CinematicWordReveal
              lang={lang}
              text={t.subtitle}
              preset="section"
              className="font-editorial mt-5 text-3xl font-medium tracking-tight text-zinc-200 md:text-4xl"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {t.tiers.map((tier, index) => {
              const isPopular = "popular" in tier && Boolean(tier.popular);

              return (
                <motion.article
                  key={tier.key}
                  initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={CINEMATIC_VIEWPORT}
                  transition={{
                    duration: 1.08,
                    ease: LOCOMOTIVE_EASE,
                    delay: index * 0.13,
                  }}
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
                      <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={CINEMATIC_VIEWPORT}
                        transition={{
                          duration: 0.7,
                          ease: LOCOMOTIVE_EASE,
                          delay: 0.15 + index * 0.05,
                        }}
                        className="absolute right-5 top-5 border border-purple-500/40 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.32em] text-white"
                      >
                        {t.recommended}
                      </motion.div>
                    </>
                  )}

                  <header className="relative">
                    <CinematicWordReveal
                      lang={lang}
                      text={t.tierTitles[tier.key]}
                      preset="card"
                      className="font-label text-[11px] font-bold uppercase tracking-[0.46em] text-zinc-300"
                    />
                    <div className="mt-5 flex items-baseline gap-3">
                      <motion.div
                        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={CINEMATIC_VIEWPORT}
                        transition={{
                          duration: 0.95,
                          ease: LOCOMOTIVE_EASE,
                          delay: 0.12 + index * 0.05,
                        }}
                        className="font-editorial text-5xl font-medium tracking-tight text-white"
                      >
                        {tier.price}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={CINEMATIC_VIEWPORT}
                        transition={{
                          duration: 0.6,
                          ease: LOCOMOTIVE_EASE,
                          delay: 0.28 + index * 0.05,
                        }}
                        className="font-label text-[10px] font-bold uppercase tracking-[0.36em] text-zinc-500"
                      >
                        {tier.style}
                      </motion.div>
                    </div>
                  </header>

                  <ul className="relative mt-8 space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={CINEMATIC_VIEWPORT}
                        transition={{
                          duration: 0.55,
                          ease: LOCOMOTIVE_EASE,
                          delay: 0.22 + index * 0.06 + featureIndex * 0.07,
                        }}
                        className="font-label text-xs font-medium uppercase tracking-[0.22em] text-zinc-400"
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={CINEMATIC_VIEWPORT}
                    transition={{
                      duration: 0.75,
                      ease: LOCOMOTIVE_EASE,
                      delay: 0.45 + index * 0.08,
                    }}
                    className="relative mt-10"
                  >
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
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
