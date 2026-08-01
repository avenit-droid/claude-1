"use client";

import { useEffect } from "react";
import { useLuxoraStore } from "@/lib/store";

export default function ThemeInit() {
  const setTheme = useLuxoraStore((s) => s.setTheme);
  const setLocale = useLuxoraStore((s) => s.setLocale);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("luxora-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : prefersLight ? "light" : "dark";
    setTheme(theme as "dark" | "light");

    const storedLocale = window.localStorage.getItem("luxora-locale");
    const browserLocale = navigator.language.startsWith("ru") ? "ru" : "en";
    const locale = storedLocale === "ru" || storedLocale === "en" ? storedLocale : browserLocale;
    setLocale(locale as "ru" | "en");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
