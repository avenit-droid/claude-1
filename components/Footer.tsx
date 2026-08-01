"use client";

import dynamic from "next/dynamic";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";

const CoreScene = dynamic(() => import("@/components/three/CoreScene"), { ssr: false });

export default function Footer() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].footer;

  return (
    <footer className="relative overflow-hidden bg-obsidian pt-32">
      <div className="absolute inset-x-0 top-0 h-[70vh] opacity-40" aria-hidden>
        <CoreScene stage={3} />
      </div>

      <div className="container-luxora relative z-10">
        <h2 className="font-display text-fluid-h1 text-chrome text-balance">{t.tagline}</h2>

        <div className="mt-16 grid gap-10 border-t border-[var(--border)] pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg tracking-[0.2em] text-[var(--text)]">LUXORA</p>
            <p className="mt-3 max-w-[220px] text-[13px] text-[var(--text-dim)]">
              {locale === "ru"
                ? "Лаборатория живой материи и интеллекта. Основана в 2038 году."
                : "A living-matter and intelligence laboratory. Founded 2038."}
            </p>
          </div>

          {t.columns.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-dim)]">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13.5px] text-[var(--text)] hover:text-opal">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] py-8 text-[12px] text-[var(--text-dim)] sm:flex-row">
          <p>© {new Date().getFullYear()} {t.rights}</p>
          <p className="font-mono">2045 — READY</p>
        </div>
      </div>
    </footer>
  );
}
