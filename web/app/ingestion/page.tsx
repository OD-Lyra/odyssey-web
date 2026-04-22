"use client";

import { useState } from "react";
import { Navbar } from "@/src/components/Navbar";
import type { Lang } from "@/src/i18n";

export default function IngestionEntryPage() {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <main className="min-h-screen bg-black text-zinc-100 antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-12">
        <h1 className="font-editorial text-4xl tracking-tight text-white md:text-6xl">
          Ingestion
        </h1>
      </section>
    </main>
  );
}

