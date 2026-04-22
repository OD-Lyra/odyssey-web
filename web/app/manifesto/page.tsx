"use client";

import { useState } from "react";
import { Manifesto } from "@/src/components/Manifesto";
import { Navbar } from "@/src/components/Navbar";
import type { Lang } from "@/src/i18n";

export default function ManifestoPage() {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <main className="min-h-screen bg-black text-zinc-100 antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <div className="pt-16">
        <Manifesto lang={lang} />
      </div>
    </main>
  );
}

