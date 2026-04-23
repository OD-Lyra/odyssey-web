"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useMemo, useRef } from "react";
import type { AppDictionary } from "../../lib/dictionaries";
import type { Locale } from "../../i18n.config";
import {
  editorialAccentRule,
  editorialColumn,
  editorialSectionShell,
} from "../lib/editorialSkin";

const LOCOMOTIVE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TITLE_FADE_DURATION = 0.95;
const WORD_DURATION = 1.2;
const WORD_STAGGER = 0.02;

function splitWords(text: string): string[] {
  return text.trim().split(/\s+/).filter(Boolean);
}

export function Manifesto({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: AppDictionary["manifesto"];
}) {
  const t = dictionary;
  const words = useMemo(() => splitWords(t.body), [lang, t.body]);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    margin: "-8% 0px",
    once: false,
    amount: "some",
  });

  return (
    <motion.section
      ref={sectionRef}
      id="manifesto"
      className={`group/manifesto relative overflow-hidden ${editorialSectionShell} px-6 py-24 md:px-12 md:py-32`}
    >
      <video
        src="/eclipse.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-20 transition-all duration-1000 ease-out group-hover/manifesto:scale-105 group-hover/manifesto:opacity-35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65"
      />

      <div className={`relative z-[1] ${editorialColumn} md:max-w-[76rem] lg:max-w-[92rem] ${editorialAccentRule}`}>
        <div key={lang}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: TITLE_FADE_DURATION, ease: LOCOMOTIVE_EASE }}
            className="font-label text-[12px] uppercase tracking-[0.5em] text-zinc-500 transition-colors duration-300"
          >
            {t.title}
          </motion.p>
          <div className="font-editorial mt-10 text-3xl leading-[1.2] tracking-tight text-white antialiased md:text-5xl lg:text-6xl">
            {words.length === 0 ? (
              <p className="m-0">{t.body}</p>
            ) : (
              words.map((word, index) => (
                <Fragment key={`${lang}-${index}`}>
                  {index > 0 ? " " : null}
                  <motion.span
                    className="inline-block align-baseline"
                    initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0, y: 15, filter: "blur(8px)" }
                    }
                    transition={{
                      duration: WORD_DURATION,
                      ease: LOCOMOTIVE_EASE,
                      delay: index * WORD_STAGGER,
                    }}
                  >
                    {word}
                  </motion.span>
                </Fragment>
              ))
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
