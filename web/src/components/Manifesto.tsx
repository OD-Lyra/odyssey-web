"use client";

import { motion } from "framer-motion";
import { translations, type Lang } from "../i18n";
import { LOCOMOTIVE_EASE } from "../lib/cinematicMotion";
import { CinematicWordReveal } from "./CinematicWordReveal";

const TITLE_DURATION = 1.35;

export function Manifesto({ lang }: { lang: Lang }) {
  const t = translations[lang].manifesto;

  return (
    <section id="manifesto" className="bg-black px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div key={lang}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: TITLE_DURATION, ease: LOCOMOTIVE_EASE }}
            className="font-label text-[10px] uppercase tracking-[0.5em] text-zinc-500 transition-colors duration-300"
          >
            {t.title}
          </motion.p>
          <CinematicWordReveal
            lang={lang}
            text={t.body}
            preset="manifesto"
            className="font-editorial mt-10 text-3xl leading-[1.2] tracking-tight text-white antialiased md:text-5xl lg:text-6xl"
          />
        </div>
      </div>
    </section>
  );
}
