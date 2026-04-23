"use client";

import { useState } from "react";
import { Hero } from "../src/components/Hero";
import { Manifesto } from "../src/components/Manifesto";
import { Navbar } from "../src/components/Navbar";
import { Partnerships } from "../src/components/Partnerships";
import { Pricing } from "../src/components/Pricing";
import { Process } from "../src/components/Process";
import type { Lang } from "../src/i18n";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Manifesto lang={lang} />
      <Process lang={lang} />
      <Pricing lang={lang} />
      <Partnerships lang={lang} />
    </main>
  );
}

