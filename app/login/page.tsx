import { redirect } from "next/navigation";
import { i18n } from "@/i18n.config";

/** Legacy `/login` → locale-aware auth (default French). */
export default function LoginRootRedirectPage() {
  redirect(`/${i18n.defaultLocale}/login`);
}
