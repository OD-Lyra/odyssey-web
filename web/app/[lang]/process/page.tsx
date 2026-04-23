import { Navbar } from "@/src/components/Navbar";
import { Process } from "@/src/components/Process";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/i18n.config";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ProcessPage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang: Locale = routeLang === "en" ? "en" : "fr";
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-black text-zinc-100 antialiased">
      <Navbar lang={lang} dictionary={dictionary.header} />
      <div className="pt-16">
        <Process lang={lang} dictionary={dictionary.process} />
      </div>
    </main>
  );
}

