import { Hero } from "@/src/components/Hero";
import { Manifesto } from "@/src/components/Manifesto";
import { Navbar } from "@/src/components/Navbar";
import { Partnerships } from "@/src/components/Partnerships";
import { Pricing } from "@/src/components/Pricing";
import { Process } from "@/src/components/Process";
import type { Lang } from "@/src/i18n";
import { getDictionary } from "@/lib/dictionaries";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang: Lang = routeLang === "en" ? "en" : "fr";
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 antialiased">
      <Navbar lang={lang} dictionary={dictionary.header} />
      <Hero lang={lang} />
      <Manifesto lang={lang} />
      <Process lang={lang} />
      <Pricing lang={lang} />
      <Partnerships lang={lang} />
    </main>
  );
}

