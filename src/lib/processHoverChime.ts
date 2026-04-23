/**
 * Angel-choir chime for Pricing tier selection (and legacy Process hover).
 * Web Audio only; skips touch + reduced-motion.
 */

const THROTTLE_MS = 900;

let lastPlay = 0;
let sharedContext: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (sharedContext) return sharedContext;
  const Ctor =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  sharedContext = new Ctor();
  return sharedContext;
}

/** Serene cluster (roughly E–G#–B–D): luminous, “upper choir” register */
const CHOIR_PITCHES: { hz: number; weight: number; enter: number }[] = [
  { hz: 329.63, weight: 1.0, enter: 0.0 },
  { hz: 415.3, weight: 0.92, enter: 0.04 },
  { hz: 493.88, weight: 0.82, enter: 0.085 },
  { hz: 659.25, weight: 0.68, enter: 0.128 },
];

/** Hz offsets simulating singers slightly out of tune — beating = choral width */
const ENSEMBLE_SPREAD_HZ = [0, 1.28, -0.92, 2.05, -1.58, 2.92];

export function playProcessStepHoverChime(): void {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const now = performance.now();
  if (now - lastPlay < THROTTLE_MS) return;
  lastPlay = now;

  const ctx = getContext();
  if (!ctx) return;
  void ctx.resume().catch(() => {});

  const t0 = ctx.currentTime;
  const attack = 0.14;
  const decay = 2.45;
  const stopAt = t0 + decay + 0.15;

  const vibrato = ctx.createOscillator();
  vibrato.type = "sine";
  vibrato.frequency.setValueAtTime(4.4, t0);
  const vibratoDepth = ctx.createGain();
  vibratoDepth.gain.setValueAtTime(5.5, t0);
  vibrato.connect(vibratoDepth);
  vibrato.start(t0);
  vibrato.stop(stopAt);

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.Q.value = 0.55;
  filter.frequency.setValueAtTime(4200, t0);
  filter.frequency.exponentialRampToValueAtTime(1280, t0 + decay * 0.95);

  const master = ctx.createGain();
  master.gain.value = 0.92;

  const compressor = ctx.createDynamicsCompressor();
  compressor.threshold.value = -16;
  compressor.knee.value = 22;
  compressor.ratio.value = 3.2;
  compressor.attack.value = 0.004;
  compressor.release.value = 0.28;

  filter.connect(master);
  master.connect(compressor);
  compressor.connect(ctx.destination);

  const wireVoice = (hz: number, peak: number, startOffset: number) => {
    const start = t0 + startOffset;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(hz, start);
    vibratoDepth.connect(osc.detune);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(peak, start + attack);
    const sustainEnd = start + attack + 0.35;
    g.gain.setValueAtTime(peak * 0.92, sustainEnd);
    g.gain.exponentialRampToValueAtTime(0.0001, start + decay);

    osc.connect(g);
    g.connect(filter);
    osc.start(start);
    osc.stop(stopAt);
  };

  CHOIR_PITCHES.forEach((note) => {
    const base = (0.0095 * note.weight) / ENSEMBLE_SPREAD_HZ.length;

    ENSEMBLE_SPREAD_HZ.forEach((spreadHz, layerIndex) => {
      const layerGain = base * (1.05 - layerIndex * 0.07);
      wireVoice(note.hz + spreadHz, layerGain, note.enter);
      /** Soft 2nd harmonic = “vowel body”, only on inner layers */
      if (layerIndex <= 2) {
        wireVoice(note.hz * 2 + spreadHz * 0.45, layerGain * 0.14, note.enter + 0.025);
      }
    });
  });

  /** Barely-there breath in very high partial (angel “air”) */
  wireVoice(987.77, 0.0036, 0.15);
  wireVoice(1174.66, 0.0026, 0.17);
}
