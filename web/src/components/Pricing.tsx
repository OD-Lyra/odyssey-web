"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { translations, type Lang } from "../i18n";
import {
  editorialAccentRule,
  editorialColumn,
  editorialSectionShell,
} from "../lib/editorialSkin";
import { LOCOMOTIVE_EASE, CINEMATIC_VIEWPORT } from "../lib/cinematicMotion";
import { playProcessStepHoverChime } from "../lib/processHoverChime";
import { CinematicWordReveal } from "./CinematicWordReveal";

const KICKER_DURATION = 0.85;

/** Same easing family as Process spotlight */
const SELECT_TRANSITION = {
  duration: 0.85,
  ease: LOCOMOTIVE_EASE,
} as const;

const UV_RADIAL =
  "radial-gradient(circle at 30% 20%, rgba(124,58,237,0.42) 0%, rgba(139,92,246,0.22) 38%, transparent 72%)";

export function Pricing({ lang }: { lang: Lang }) {
  const t = translations[lang].pricing;
  const prefersReducedMotion = useReducedMotion();
  const [selectedTierKey, setSelectedTierKey] = useState<string | null>(null);

  useEffect(() => {
    setSelectedTierKey(null);
  }, [lang]);

  const hasSelection = selectedTierKey !== null;

  const selectTier = useCallback((key: string) => {
    setSelectedTierKey(key);
    playProcessStepHoverChime();
  }, []);

  return (
    <section id="pricing" className={`px-5 py-24 md:px-12 md:py-32 ${editorialSectionShell}`}>
      <div className="mx-auto w-full max-w-[1400px] md:max-w-[92rem]">
        <div key={lang}>
          <div className={`mb-14 md:mb-18 ${editorialColumn} md:max-w-[76rem] lg:max-w-[92rem] ${editorialAccentRule}`}>
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
              className="font-editorial mt-5 text-3xl tracking-tight text-white md:text-4xl"
            />
          </div>

          <div className="relative py-3 md:py-6">
            <div className="grid grid-cols-1 gap-6 overflow-visible md:grid-cols-3 md:gap-8">
              {t.tiers.map((tier, index) => {
                const isPopular = "popular" in tier && Boolean(tier.popular);
                const isSelected = selectedTierKey === tier.key;
                /** Middle column default state (no user pick yet) — same UV language as “recommended” */
                const isDefaultPopularGlow = isPopular && !hasSelection;
                /** Full ultraviolet treatment (matches former middle card when chosen) */
                const isUltraviolet = isSelected || isDefaultPopularGlow;
                const showRadialBlur = isUltraviolet;

                return (
                  <motion.article
                    key={tier.key}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-label={`${t.tierTitles[tier.key]} — ${tier.price}`}
                    initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={CINEMATIC_VIEWPORT}
                    transition={{
                      delay: index * 0.13,
                      opacity: { duration: 1.08, ease: LOCOMOTIVE_EASE },
                      filter: { duration: 1.08, ease: LOCOMOTIVE_EASE },
                      y: { duration: 1.08, ease: LOCOMOTIVE_EASE },
                      scale: SELECT_TRANSITION,
                      borderColor: SELECT_TRANSITION,
                      backgroundColor: SELECT_TRANSITION,
                      boxShadow: SELECT_TRANSITION,
                    }}
                    animate={{
                      scale:
                        isSelected && prefersReducedMotion !== true ? 1.045 : 1,
                      borderColor: isSelected
                        ? "rgba(192, 132, 252, 0.65)"
                        : isDefaultPopularGlow
                          ? "rgba(168, 85, 247, 0.38)"
                          : "rgba(255, 255, 255, 0.1)",
                      backgroundColor: isSelected
                        ? "rgba(88, 28, 135, 0.14)"
                        : isDefaultPopularGlow
                          ? "rgba(46, 16, 78, 0.35)"
                          : "rgba(255, 255, 255, 0.02)",
                      boxShadow: isSelected
                        ? "0 0 0 1px rgba(192,132,252,0.45), 0 0 90px rgba(124,58,237,0.48), 0 0 120px rgba(88,28,135,0.2), 0 20px 50px rgba(0,0,0,0.55)"
                        : isDefaultPopularGlow
                          ? "0 0 0 1px rgba(168,85,247,0.18), 0 0 65px rgba(124,58,237,0.28)"
                          : "0 0 0 rgba(0,0,0,0)",
                    }}
                    style={{ transformOrigin: "center center" }}
                    className={[
                      "relative cursor-pointer overflow-hidden rounded-sm border bg-white/[0.02] p-7 backdrop-blur-md outline-none will-change-transform",
                      !isUltraviolet && "hover:border-purple-500/35",
                      "focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                      isSelected ? "z-10" : "z-0",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => selectTier(tier.key)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        selectTier(tier.key);
                      }
                    }}
                  >
                    {showRadialBlur && (
                      <div
                        aria-hidden
                        className={[
                          "pointer-events-none absolute -inset-24 blur-3xl",
                          isSelected ? "opacity-95" : "opacity-80",
                        ].join(" ")}
                        style={{ background: UV_RADIAL }}
                      />
                    )}

                    {isPopular && (
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
                    )}

                    <header className="relative">
                      <CinematicWordReveal
                        lang={lang}
                        text={t.tierTitles[tier.key]}
                        preset="card"
                        className={
                          isSelected
                            ? "font-label text-[11px] font-bold uppercase tracking-[0.46em] text-violet-100"
                            : "font-label text-[11px] font-bold uppercase tracking-[0.46em] text-zinc-300"
                        }
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
                          className={
                            isSelected
                              ? "font-editorial text-5xl font-medium tracking-tight text-white drop-shadow-[0_0_28px_rgba(167,139,250,0.35)]"
                              : "font-editorial text-5xl font-medium tracking-tight text-white"
                          }
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
                          className={
                            isSelected
                              ? "font-label text-[10px] font-bold uppercase tracking-[0.36em] text-violet-300/90"
                              : "font-label text-[10px] font-bold uppercase tracking-[0.36em] text-zinc-500"
                          }
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
                          className={
                            isSelected
                              ? "font-label text-xs font-medium uppercase tracking-[0.22em] text-violet-100/85"
                              : "font-label text-xs font-medium uppercase tracking-[0.22em] text-zinc-400"
                          }
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
                      <span
                        className={[
                          "flex w-full items-center justify-center border px-5 py-3 font-label text-[10px] font-bold uppercase tracking-[0.5em] transition-colors",
                          isSelected
                            ? "border-purple-400/70 bg-purple-500/25 text-white shadow-[0_0_32px_rgba(139,92,246,0.35)]"
                            : "border-white/10 bg-black/30 text-white",
                        ].join(" ")}
                      >
                        {t.cta}
                      </span>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
