"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLenis } from "@/components/SmoothScrollProvider";

const CoreScene = dynamic(() => import("@/components/three/CoreScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].hero;
  const lenis = useLenis();

  const scrollToTech = () => {
    const el = document.getElementById("tech");
    if (el && lenis) lenis.scrollTo(el, { offset: -40 });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-obsidian"
    >
      <div className="absolute inset-0 bg-aurora-veil" aria-hidden />
      <div className="absolute inset-0 opacity-90">
        <CoreScene stage={1} />
      </div>

      <div className="container-luxora relative z-10 grid gap-10 pt-28 pb-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora"
          >
            {t.eyebrow}
          </motion.p>

          <h1 className="font-display text-fluid-hero leading-[0.98] tracking-tight text-chrome">
            {t.title.split("\n").map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-xl text-fluid-body text-[var(--text-dim)] text-balance"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton onClick={scrollToTech}>{t.ctaPrimary}</MagneticButton>
            <MagneticButton variant="ghost" onClick={scrollToTech}>
              {t.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-6 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0"
        >
          {t.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-3xl text-opal">{stat.value}</dd>
              <dt className="mt-1 text-[12px] text-[var(--text-dim)]">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.button
        onClick={scrollToTech}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-[var(--text-dim)]"
        aria-label="Прокрутить вниз"
      >
        <span className="block animate-float">↓ scroll</span>
      </motion.button>
    </section>
  );
}
