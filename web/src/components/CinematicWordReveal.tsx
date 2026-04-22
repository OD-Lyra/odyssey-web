"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useMemo, useRef } from "react";
import type { Lang } from "../i18n";
import {
  LOCOMOTIVE_EASE,
  CINEMATIC_IN_VIEW,
  WORD_REVEAL_PRESETS,
  buildWordRevealTokens,
  type WordRevealPreset,
} from "../lib/cinematicMotion";

type Props = {
  text: string;
  lang: Lang;
  className?: string;
  preset?: WordRevealPreset;
  /** Added to every word delay (e.g. sync with a parent stagger). */
  delayOffset?: number;
};

export function CinematicWordReveal({
  text,
  lang,
  className = "",
  preset = "section",
  delayOffset = 0,
}: Props) {
  const config = WORD_REVEAL_PRESETS[preset];
  const tokens = useMemo(
    () => buildWordRevealTokens(text, config),
    [lang, text, preset],
  );
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, CINEMATIC_IN_VIEW);

  return (
    <div ref={ref} className={className}>
      {tokens.map((token) => (
        <Fragment key={`${lang}-${token.key}`}>
          {token.needsLeadingSpace ? " " : null}
          <motion.span
            className="inline-block align-baseline"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 20, filter: "blur(10px)" }
            }
            transition={{
              duration: config.wordDuration,
              ease: LOCOMOTIVE_EASE,
              delay: token.delay + delayOffset,
            }}
          >
            {token.word}
          </motion.span>
        </Fragment>
      ))}
    </div>
  );
}
