export const LOCOMOTIVE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Shared scroll trigger: early, once, cinematic pacing. */
export const CINEMATIC_IN_VIEW = {
  margin: "-10% 0px" as const,
  once: true as const,
  amount: 0.2 as const,
};

/** `whileInView` on motion nodes: slightly looser than word blocks for large surfaces. */
export const CINEMATIC_VIEWPORT = {
  once: true as const,
  margin: "-10% 0px" as const,
  amount: 0.25 as const,
};

export type WordRevealPresetConfig = {
  wordDuration: number;
  wordStagger: number;
  phrasePauseAfter: number;
  firstWordDelay: number;
};

export const WORD_REVEAL_PRESETS = {
  manifesto: {
    wordDuration: 1.05,
    wordStagger: 0.055,
    phrasePauseAfter: 0.42,
    firstWordDelay: 0.22,
  },
  section: {
    wordDuration: 0.78,
    wordStagger: 0.038,
    phrasePauseAfter: 0.3,
    firstWordDelay: 0.14,
  },
  card: {
    wordDuration: 0.52,
    wordStagger: 0.028,
    phrasePauseAfter: 0.16,
    firstWordDelay: 0.08,
  },
} as const satisfies Record<string, WordRevealPresetConfig>;

export type WordRevealPreset = keyof typeof WORD_REVEAL_PRESETS;

export type WordRevealToken = {
  key: string;
  word: string;
  delay: number;
  needsLeadingSpace: boolean;
};

export function splitIntoPhrases(body: string): string[] {
  const trimmed = body.trim();
  const parts = trimmed.split(/(?<=[.!?])\s+/).filter(Boolean);
  return parts.length > 0 ? parts : [trimmed];
}

export function buildWordRevealTokens(
  body: string,
  config: WordRevealPresetConfig,
): WordRevealToken[] {
  const phrases = splitIntoPhrases(body);
  let clock = config.firstWordDelay;
  const tokens: WordRevealToken[] = [];

  phrases.forEach((phrase, phraseIndex) => {
    const words = phrase.trim().split(/\s+/).filter(Boolean);
    words.forEach((word, wordIndex) => {
      tokens.push({
        key: `${phraseIndex}-${wordIndex}`,
        word,
        delay: clock + wordIndex * config.wordStagger,
        needsLeadingSpace: !(phraseIndex === 0 && wordIndex === 0),
      });
    });
    clock += words.length * config.wordStagger + config.phrasePauseAfter;
  });

  return tokens;
}
