"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";

const CoreScene = dynamic(() => import("@/components/three/CoreScene"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].about;

  return (
    <section id="about" className="relative bg-obsidian py-32">
      <div className="container-luxora grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p variants={fadeUp} className="mb-5 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">
            {t.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-fluid-h1 text-chrome text-balance">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-fluid-body text-[var(--text-dim)] text-balance">
            {t.lead}
          </motion.p>

          <div className="mt-8 space-y-5">
            {t.paragraphs.map((p) => (
              <motion.p key={p} variants={fadeUp} className="text-[15px] leading-relaxed text-[var(--text-dim)]">
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {t.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-[var(--border)] p-5"
              >
                <p className="font-display text-[15px] text-opal">{pillar.title}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-dim)]">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative h-[420px] lg:h-[560px]" aria-hidden>
          <CoreScene stage={0} />
        </div>
      </div>
    </section>
  );
}
