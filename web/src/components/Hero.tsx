import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// CONFIGURATION DES VIDÉOS - Si tu n'as pas encore les fichiers, laisse seulement "/hero.mp4"
const VIDEOS = [
  "/hero.mp4",
  "/reel-02.mp4",
  "/reel-03.mp4"
];

const PITCH_PHRASES = [
  "CRÉEZ LA VIDÉO DE LEUR VIE",
  "EN 3 ÉTAPES SIMPLES",
  "L'ALGORITHME AU SERVICE DE L'ÉMOTION",
  "L'EXCELLENCE CINÉMATOGRAPHIQUE"
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isNarrativeMode, setIsNarrativeMode] = useState(false);

  useEffect(() => {
    // 1. On garde le titre 3.5s avant de lancer le pitch
    const startPitch = setTimeout(() => setIsNarrativeMode(true), 3500);
    const timer = setInterval(() => {
      if (isNarrativeMode) setIndex((prev) => (prev + 1) % PITCH_PHRASES.length);
    }, 5000);
    return () => { clearTimeout(startPitch); clearInterval(timer); };
  }, [isNarrativeMode]);

  useEffect(() => {
    // 2. On change de vidéo toutes le 12s (Seulement s'il y en a plus d'une)
    if (VIDEOS.length <= 1) return;
    const videoTimer = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % VIDEOS.length);
    }, 12000);
    return () => clearInterval(videoTimer);
  }, []);

  const locomotiveEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative w-full h-screen bg-[#020202] overflow-hidden select-none" style={{ isolation: 'isolate' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .grain-engine::before {
          content: ""; position: absolute; inset: -100%;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          background-size: 180px; opacity: 0.12; pointer-events: none;
          animation: grain-dance 4s steps(5) infinite;
        }
        @keyframes grain-dance {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-1%, 2%); }
          50% { transform: translate(2%, -1%); }
        }
        .vibrant-halo {
          color: white;
          text-shadow: 0 0 15px rgba(124, 58, 237, 0.8), 0 0 30px rgba(139, 92, 246, 0.5);
        }
        .neon-vivid:hover {
          color: #ffffff !important;
          text-shadow: 0 0 10px #fff, 0 0 20px #8b5cf6, 0 0 40px #7c3aed;
          transform: scale(1.06); letter-spacing: 0.6em;
        }
      `}} />

      {/* LAYER 0 : VIDEO ENGINE (Sécurisé) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#020202]">
        <AnimatePresence mode="wait">
          <motion.div
            key={videoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: locomotiveEase }}
            className="absolute inset-0"
          >
            <video 
              src={VIDEOS[videoIndex]} 
              autoPlay loop muted playsInline 
              className="w-full h-full object-cover grayscale-[0.05] contrast-[1.1]"
              onLoadedData={(e) => console.log("Video loaded")}
              onError={(e) => console.error("Video error on:", VIDEOS[videoIndex])}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-[1]" />
      </div>

      {/* LAYER 2 : BRANDING (Position Initiale 14vh -> 20% Opacité) */}
      <motion.div 
        initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
        animate={{ 
          opacity: isNarrativeMode ? 0.4 : 0.2, 
          y: 0,
          filter: "blur(0px)",
          top: isNarrativeMode ? "85px" : "14vh", 
          left: "40px",
          scale: isNarrativeMode ? 0.12 : 1,
        }}
        transition={{ duration: 2.5, ease: locomotiveEase }}
        className="absolute z-20 pointer-events-none px-8 md:px-20 origin-top-left"
      >
        <h1 className="text-[16vw] md:text-[12.5vw] leading-[0.8] tracking-[-0.05em] text-white font-bold uppercase whitespace-nowrap">
          Odyssey <br /> Films
        </h1>
      </motion.div>

      {/* LAYER 3 : PITCH (Remonté, 50% Opacité, Halo serré) */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center px-12 text-center">
        <AnimatePresence mode="wait">
          {isNarrativeMode && (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(20px)", y: 25 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: -60 }}
              exit={{ opacity: 0, filter: "blur(20px)", y: -80 }}
              transition={{ duration: 1.8, ease: locomotiveEase }}
            >
              <h2 className="vibrant-halo text-[5vw] md:text-[3.5vw] font-bold uppercase tracking-[0.8em] leading-tight max-w-[85vw]" style={{ opacity: 0.5 }}>
                {PITCH_PHRASES[index]}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-50 pointer-events-none grain-engine" />

      {/* LAYER 10 : NAVIGATION BASSE */}
      <div className="absolute inset-0 z-[100] flex flex-col justify-end p-10 md:p-24 pointer-events-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 w-full">
          <div className="flex flex-col gap-5 items-start">
            <NavItem label="CHAPTER 01" delay={1.2} />
            <NavItem label="ULTRAVIOLET CUT" delay={1.3} isWhite />
            <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.5em] text-zinc-600">Y26</span>
          </div>
          <div className="flex flex-col items-start pt-2.5">
            <NavItem label="FILM" delay={1.4} />
          </div>
          <div className="flex flex-col gap-5 items-start">
            <NavItem label="ODYSSEY ENGINE" delay={1.5} />
            <NavItem label="EMOTIONAL ALGORITHM" delay={1.6} isWhite />
            <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.5em] text-zinc-600">Y26</span>
          </div>
          <div className="flex flex-col items-start pt-2.5">
            <NavItem label="FILM" delay={1.7} />
          </div>
        </div>
      </div>

    </section>
  );
}

function NavItem({ label, delay, isWhite = false }: { label: string, delay: number, isWhite?: boolean }) {
  return (
    <div className="relative py-2 px-4 -ml-4 overflow-visible">
      <motion.div initial={{ y: "110%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay }}>
        <span className={`neon-vivid inline-block text-[12px] md:text-[14px] font-bold uppercase tracking-[0.5em] transition-all duration-700 ease-out cursor-text select-text ${isWhite ? 'text-white' : 'text-zinc-500'}`}>
          {label}
        </span>
      </motion.div>
    </div>
  );
}

