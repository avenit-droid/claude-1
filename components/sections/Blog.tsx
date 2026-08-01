"use client";

import { motion } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";

export default function Blog() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].blog;

  return (
    <section id="blog" className="relative bg-obsidian py-32">
      <div className="container-luxora">
        <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">{t.eyebrow}</p>
        <h2 className="font-display text-fluid-h1 text-chrome">{t.title}</h2>
        <p className="mt-3 max-w-lg text-[15px] text-[var(--text-dim)]">{t.lead}</p>

        <div className="mt-14 divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {t.posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group grid gap-4 py-8 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8"
            >
              <span className="font-mono text-[12px] text-[var(--text-dim)]">{post.date}</span>
              <div>
                <h3 className="font-display text-xl text-[var(--text)] transition-colors group-hover:text-opal">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-[var(--text-dim)]">{post.excerpt}</p>
              </div>
              <span className="whitespace-nowrap text-[12px] text-[var(--text-dim)]">{post.readTime}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
