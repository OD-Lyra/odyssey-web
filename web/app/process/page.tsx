"use client";

import { useState } from "react";
import { Navbar } from "@/src/components/Navbar";
import { Process } from "@/src/components/Process";
import type { Lang } from "@/src/i18n";

export default function ProcessPage() {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <main className="min-h-screen bg-black text-zinc-100 antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <div className="pt-16">
        <Process lang={lang} />
      </div>
    </main>
  );
}

