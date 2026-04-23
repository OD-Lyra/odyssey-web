import { Navbar } from "@/src/components/Navbar";
import {
  editorialAccentRule,
  editorialColumn,
  editorialSectionShell,
} from "@/src/lib/editorialSkin";
import {
  editorialFieldInput,
  editorialFieldLabel,
  editorialFieldTextarea,
  editorialSubmitButton,
} from "@/src/lib/editorialFormClasses";
import { OdysseyBrandLockup } from "@/src/components/OdysseyBrandLockup";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/i18n.config";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function PartnersPage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang: Locale = routeLang === "en" ? "en" : "fr";
  const dictionary = await getDictionary(lang);
  const t = dictionary.partnersPage;
  const logoFallback = dictionary.header.logoFallback;

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 antialiased">
      <Navbar lang={lang} dictionary={dictionary.header} />
      <section className={`mx-auto px-6 pb-28 pt-32 md:px-12 ${editorialSectionShell}`}>
        <div className={`${editorialColumn} md:max-w-[76rem] lg:max-w-[92rem] ${editorialAccentRule}`}>
          <OdysseyBrandLockup wordmark={logoFallback} size="page" className="mb-10 md:mb-12" />
          <h1 className="font-editorial text-4xl tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
            {t.title}
          </h1>
          <p className="font-label mt-8 text-sm leading-relaxed text-zinc-400 md:text-base">
            {t.subtitle}
          </p>

          <form className="mt-14 space-y-10" noValidate>
            <label className="block">
              <span className={editorialFieldLabel}>{t.form.organization}</span>
              <input
                name="organization"
                type="text"
                autoComplete="organization"
                className={editorialFieldInput}
                required
              />
            </label>

            <label className="block">
              <span className={editorialFieldLabel}>{t.form.contactName}</span>
              <input name="contactName" type="text" autoComplete="name" className={editorialFieldInput} required />
            </label>

            <label className="block">
              <span className={editorialFieldLabel}>{t.form.email}</span>
              <input name="email" type="email" autoComplete="email" className={editorialFieldInput} required />
            </label>

            <label className="block">
              <span className={editorialFieldLabel}>{t.form.phone}</span>
              <input name="phone" type="tel" autoComplete="tel" className={editorialFieldInput} />
            </label>

            <label className="block">
              <span className={editorialFieldLabel}>{t.form.region}</span>
              <input name="region" type="text" autoComplete="address-level1" className={editorialFieldInput} />
            </label>

            <label className="block">
              <span className={editorialFieldLabel}>{t.form.context}</span>
              <textarea name="context" rows={3} className={editorialFieldTextarea} />
            </label>

            <label className="block">
              <span className={editorialFieldLabel}>{t.form.message}</span>
              <textarea name="message" rows={5} className={editorialFieldTextarea} required />
            </label>

            <button type="submit" className={editorialSubmitButton}>
              {t.form.submit}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
