type OdysseyBrandLockupSize = "section" | "page";

const presets: Record<
  OdysseyBrandLockupSize,
  {
    wordmark: string;
    halo: string;
  }
> = {
  section: {
    wordmark:
      "font-brand truncate text-[clamp(0.9375rem,2.4vw,1.375rem)] font-light uppercase leading-none tracking-[0.48em] text-zinc-300 sm:text-xl sm:tracking-[0.56em] md:text-[1.375rem] md:tracking-[0.62em]",
    halo:
      "absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 min-w-[250%] h-[300%] max-w-none object-cover mix-blend-screen opacity-20 pointer-events-none transition-all duration-1000 ease-out group-hover/odyssey:opacity-40 group-hover/odyssey:scale-110",
  },
  page: {
    wordmark:
      "font-brand truncate text-[clamp(1.0625rem,3vw,1.75rem)] font-light uppercase leading-none tracking-[0.48em] text-zinc-200 sm:text-2xl sm:tracking-[0.56em] md:text-[1.75rem] md:tracking-[0.62em] lg:text-[1.875rem]",
    halo:
      "absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 min-w-[250%] h-[300%] max-w-none object-cover mix-blend-screen opacity-20 pointer-events-none transition-all duration-1000 ease-out group-hover/odyssey:opacity-40 group-hover/odyssey:scale-110",
  },
};

/** Wordmark with cinematic eclipse halo behind (same intent as navbar). */
export function OdysseyBrandLockup({
  wordmark,
  size = "section",
  className = "",
}: {
  wordmark: string;
  size?: OdysseyBrandLockupSize;
  className?: string;
}) {
  const p = presets[size];

  return (
    <div className={`min-w-0 ${className}`}>
      <span className="relative inline-flex items-center group/odyssey">
        <video
          src="/eclipse.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={p.halo}
        />
        <span className={`relative z-[1] ${p.wordmark}`}>{wordmark}</span>
      </span>
    </div>
  );
}
