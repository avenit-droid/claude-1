"use client";

import { motion } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Careers() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].careers;

  return (
    <section id="careers" className="relative bg-void py-32">
      <div className="container-luxora">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">{t.eyebrow}</p>
            <h2 className="font-display text-fluid-h1 text-chrome">{t.title}</h2>
            <p className="mt-3 max-w-lg text-[15px] text-[var(--text-dim)]">{t.lead}</p>
          </div>
          <MagneticButton variant="ghost">{t.cta}</MagneticButton>
        </div>

        <div className="mt-14 divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {t.roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-wrap items-center justify-between gap-3 py-6"
              data-magnetic
            >
              <h3 className="font-display text-xl text-[var(--text)] transition-colors group-hover:text-opal">
                {role.title}
              </h3>
              <div className="flex items-center gap-4 text-[13px] text-[var(--text-dim)]">
                <span>{role.location}</span>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[11px] uppercase">
                  {role.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
