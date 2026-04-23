import { Navbar } from "@/src/components/Navbar";
import type { Lang } from "@/src/i18n";
import { getDictionary } from "@/lib/dictionaries";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function IngestionEntryPage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang: Lang = routeLang === "en" ? "en" : "fr";
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-black text-zinc-100 antialiased">
      <Navbar lang={lang} dictionary={dictionary.header} />
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-12">
        <h1 className="font-editorial text-4xl tracking-tight text-white md:text-6xl">
          Ingestion
        </h1>
      </section>
    </main>
  );
}

