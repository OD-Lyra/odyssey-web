import { Hero } from "@/src/components/Hero";
import { Manifesto } from "@/src/components/Manifesto";
import { Navbar } from "@/src/components/Navbar";
import { Partnerships } from "@/src/components/Partnerships";
import { Pricing } from "@/src/components/Pricing";
import { Process } from "@/src/components/Process";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/i18n.config";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang: Locale = routeLang === "en" ? "en" : "fr";
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 antialiased">
      <Navbar lang={lang} dictionary={dictionary.header} />
      <Hero lang={lang} dictionary={dictionary.hero} headerNav={dictionary.header.nav} />
      <Manifesto lang={lang} dictionary={dictionary.manifesto} />
      <Process lang={lang} dictionary={dictionary.process} />
      <Pricing lang={lang} dictionary={dictionary.pricing} />
      <Partnerships
        lang={lang}
        dictionary={dictionary.partnerships}
        logoFallback={dictionary.header.logoFallback}
      />
    </main>
  );
}

