"use client";

import { motion } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Pricing() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].pricing;

  return (
    <section id="pricing" className="relative bg-obsidian py-32">
      <div className="container-luxora">
        <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">{t.eyebrow}</p>
        <h2 className="font-display text-fluid-h1 text-chrome">{t.title}</h2>
        <p className="mt-3 max-w-lg text-[15px] text-[var(--text-dim)]">{t.lead}</p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "flex flex-col rounded-3xl border p-8",
                plan.featured
                  ? "border-opal bg-gradient-to-b from-opal/10 to-transparent shadow-glow"
                  : "border-[var(--border)]"
              )}
            >
              <p className="font-display text-2xl text-[var(--text)]">{plan.name}</p>
              <p className="mt-4 font-display text-3xl text-opal">{plan.price}</p>
              <p className="text-[12px] text-[var(--text-dim)]">{plan.period}</p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--text-dim)]">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-[var(--text-dim)]">
                    <span className="mt-1 text-aurora">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <MagneticButton variant={plan.featured ? "primary" : "ghost"} className="w-full justify-center">
                  {locale === "ru" ? "Обсудить" : "Discuss"}
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
