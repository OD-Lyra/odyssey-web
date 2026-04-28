"use client";

import { useEffect } from "react";

/** Syncs `<html lang>` with the active locale segment (root layout defaults to fr). */
export function DocumentLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
