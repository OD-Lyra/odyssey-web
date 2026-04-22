"use client";

import { motion } from "framer-motion";
import { translations, type Lang } from "../i18n";
import { LOCOMOTIVE_EASE, CINEMATIC_VIEWPORT } from "../lib/cinematicMotion";
import { CinematicWordReveal } from "./CinematicWordReveal";

const KICKER_DURATION = 0.85;

export function Partnerships({ lang }: { lang: Lang }) {
  const t = translations[lang].partnerships;

  return (
    <section id="partners" className="bg-zinc-950 px-6 py-20 md:px-12 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={CINEMATIC_VIEWPORT}
        transition={{ duration: 1.1, ease: LOCOMOTIVE_EASE }}
        className="mx-auto max-w-6xl border border-white/10 bg-black/30 p-8 md:p-12"
      >
        <div key={lang}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={CINEMATIC_VIEWPORT}
            transition={{ duration: KICKER_DURATION, ease: LOCOMOTIVE_EASE }}
            className="font-label text-[10px] uppercase tracking-[0.5em] text-zinc-500"
          >
            {t.kicker}
          </motion.p>
          <CinematicWordReveal
            lang={lang}
            text={t.title}
            preset="section"
            className="font-editorial mt-6 max-w-3xl text-3xl tracking-tight text-white antialiased md:text-5xl"
          />
          <CinematicWordReveal
            lang={lang}
            text={t.body}
            preset="card"
            className="font-label mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={CINEMATIC_VIEWPORT}
            transition={{ duration: 0.8, ease: LOCOMOTIVE_EASE, delay: 0.15 }}
            className="mt-10"
          >
            <button
              type="button"
              className="font-label border border-purple-500/50 bg-purple-500/10 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
            >
              {t.cta}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
