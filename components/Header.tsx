"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";
import { useLenis } from "./SmoothScrollProvider";
import MagneticButton from "./ui/MagneticButton";

export default function Header() {
  const locale = useLuxoraStore((s) => s.locale);
  const setLocale = useLuxoraStore((s) => s.setLocale);
  const theme = useLuxoraStore((s) => s.theme);
  const toggleTheme = useLuxoraStore((s) => s.toggleTheme);
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = content[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el && lenis) lenis.scrollTo(el, { offset: -60 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`container-luxora flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled ? "glass" : ""
        }`}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-lg tracking-[0.2em] text-[var(--text)]"
          aria-label="LUXORA — на главную"
          data-magnetic
        >
          LUXORA
        </button>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Основная навигация">
          {t.nav.links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[13px] tracking-wide text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
              data-magnetic
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[11px] font-mono uppercase text-[var(--text)]"
            aria-label="Сменить язык"
            data-magnetic
          >
            {locale}
          </button>
          <button
            onClick={toggleTheme}
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]"
            aria-label={theme === "dark" ? t.themeToggle.light : t.themeToggle.dark}
            data-magnetic
          >
            <span className="text-[13px]">{theme === "dark" ? "☾" : "☀"}</span>
          </button>
          <div className="hidden md:block">
            <MagneticButton onClick={() => scrollTo("contact")} className="!px-5 !py-2.5 text-[13px]">
              {t.nav.cta}
            </MagneticButton>
          </div>
          <button
            className="lg:hidden flex h-9 w-9 items-center justify-center text-[var(--text)]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            data-magnetic
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="container-luxora mt-3 glass rounded-3xl p-6 lg:hidden"
            aria-label="Мобильная навигация"
          >
            <div className="flex flex-col gap-4">
              {t.nav.links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-lg font-display text-[var(--text)]"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
                  className="h-9 w-9 rounded-full border border-[var(--border)] text-[11px] font-mono uppercase"
                >
                  {locale}
                </button>
                <button onClick={toggleTheme} className="h-9 w-9 rounded-full border border-[var(--border)]">
                  {theme === "dark" ? "☾" : "☀"}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
