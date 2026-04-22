"use client";

import { motion } from "framer-motion";
import { translations, type Lang } from "../i18n";
import { LOCOMOTIVE_EASE, CINEMATIC_VIEWPORT } from "../lib/cinematicMotion";
import { CinematicWordReveal } from "./CinematicWordReveal";

const KICKER_DURATION = 0.85;

export function Process({ lang }: { lang: Lang }) {
  const t = translations[lang].process;

  return (
    <section id="process" className="bg-black px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div key={lang}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={CINEMATIC_VIEWPORT}
            transition={{ duration: KICKER_DURATION, ease: LOCOMOTIVE_EASE }}
            className="font-label text-[10px] uppercase tracking-[0.5em] text-zinc-500"
          >
            {t.sectionSubtitle}
          </motion.p>
          <CinematicWordReveal
            lang={lang}
            text={t.subtitle}
            preset="section"
            className="font-editorial mt-6 max-w-3xl text-3xl tracking-tight text-white md:text-4xl"
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={CINEMATIC_VIEWPORT}
                transition={{
                  duration: 1.05,
                  ease: LOCOMOTIVE_EASE,
                  delay: index * 0.14,
                }}
                className="border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.03]"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={CINEMATIC_VIEWPORT}
                  transition={{
                    duration: 0.65,
                    ease: LOCOMOTIVE_EASE,
                    delay: 0.08 + index * 0.06,
                  }}
                  className="font-label text-[10px] uppercase tracking-[0.45em] text-zinc-500"
                >
                  {`${String(index + 1).padStart(2, "0")} ${t[step.labelKey]}`}
                </motion.p>
                <CinematicWordReveal
                  lang={lang}
                  text={step.title}
                  preset="card"
                  className="font-editorial mt-5 text-2xl tracking-tight text-white"
                />
                <CinematicWordReveal
                  lang={lang}
                  text={step.body}
                  preset="card"
                  className="font-label mt-4 text-sm leading-relaxed text-zinc-400"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
