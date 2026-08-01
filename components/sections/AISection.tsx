"use client";

import { motion } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";
import AIChat from "@/components/ui/AIChat";

export default function AISection() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].ai;

  return (
    <section id="ai" className="relative bg-obsidian py-32">
      <div className="container-luxora grid gap-16 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">{t.eyebrow}</p>
          <h2 className="font-display text-fluid-h1 text-chrome text-balance">{t.title}</h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--text-dim)]">{t.lead}</p>

          <div className="mt-10 space-y-5">
            {t.capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-4 border-b border-[var(--border)] pb-5"
              >
                <span className="font-mono text-[12px] text-aurora">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-display text-[16px] text-[var(--text)]">{cap.title}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--text-dim)]">{cap.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AIChat />
      </div>
    </section>
  );
}
