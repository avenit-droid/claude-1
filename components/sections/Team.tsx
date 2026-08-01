"use client";

import { motion } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";

const avatarGradients = [
  "linear-gradient(160deg,#7C63E8,#4FE8C9)",
  "linear-gradient(160deg,#FF8A5B,#B8A6FF)",
  "linear-gradient(160deg,#1FA98A,#D6CCFF)",
  "linear-gradient(160deg,#B8A6FF,#E85D2C)",
];

export default function Team() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].team;

  return (
    <section id="team" className="relative bg-void py-32">
      <div className="container-luxora">
        <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">{t.eyebrow}</p>
        <h2 className="font-display text-fluid-h1 text-chrome">{t.title}</h2>
        <p className="mt-3 max-w-lg text-[15px] text-[var(--text-dim)]">{t.lead}</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.members.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-2xl border border-[var(--border)] p-6"
            >
              <div
                className="h-16 w-16 rounded-full transition-transform duration-500 group-hover:scale-110"
                style={{ background: avatarGradients[i % avatarGradients.length] }}
                aria-hidden
              />
              <p className="mt-5 font-display text-[18px] text-[var(--text)]">{member.name}</p>
              <p className="mt-1 text-[13px] text-opal">{member.role}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-dim)]">{member.focus}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
