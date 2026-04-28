import { Suspense } from "react";
import { LoginForm } from "@/src/components/auth/LoginForm";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/i18n.config";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function LoginPage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang: Locale = routeLang === "en" ? "en" : "fr";
  const dictionary = await getDictionary(lang);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#020202]" aria-hidden />
      }
    >
      <LoginForm lang={lang} copy={dictionary.auth} />
    </Suspense>
  );
}
