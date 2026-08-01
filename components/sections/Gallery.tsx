"use client";

import { motion } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";

const gradients = [
  "linear-gradient(135deg,#7C63E8,#4FE8C9)",
  "linear-gradient(135deg,#B8A6FF,#FF8A5B)",
  "linear-gradient(135deg,#1FA98A,#B8A6FF)",
  "linear-gradient(135deg,#FF8A5B,#7C63E8)",
  "linear-gradient(135deg,#4FE8C9,#D6CCFF)",
  "linear-gradient(135deg,#E85D2C,#7C63E8)",
];

export default function Gallery() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].gallery;

  return (
    <section id="gallery" className="relative bg-obsidian py-32">
      <div className="container-luxora">
        <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">{t.eyebrow}</p>
        <h2 className="font-display text-fluid-h1 text-chrome">{t.title}</h2>
        <p className="mt-3 max-w-lg text-[15px] text-[var(--text-dim)]">{t.lead}</p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-[var(--border)]"
            >
              <div
                className="h-56 w-full scale-100 transition-transform duration-700 group-hover:scale-110"
                style={{ background: gradients[i % gradients.length] }}
                aria-hidden
              />
              <figcaption className="p-5">
                <p className="font-display text-[16px] text-[var(--text)]">{item.title}</p>
                <p className="mt-1 text-[12.5px] text-[var(--text-dim)]">{item.meta}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
