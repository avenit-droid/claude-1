"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].contact;
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-void py-32">
      <div className="container-luxora grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">{t.eyebrow}</p>
          <h2 className="font-display text-fluid-h1 text-chrome text-balance">{t.title}</h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[var(--text-dim)]">{t.lead}</p>

          <div className="mt-10 space-y-2 text-[14px] text-[var(--text-dim)]">
            <p>{t.address}</p>
            <a href={`mailto:${t.email}`} className="text-opal underline underline-offset-4">
              {t.email}
            </a>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 sm:p-10">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-16 text-center font-display text-2xl text-opal"
              >
                {t.form.success}
              </motion.p>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid gap-6 sm:grid-cols-2"
              >
                <label className="flex flex-col gap-2 text-[13px] text-[var(--text-dim)]">
                  {t.form.name}
                  <input
                    required
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-[14px] text-[var(--text)] outline-none focus:border-opal"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[13px] text-[var(--text-dim)]">
                  {t.form.email}
                  <input
                    required
                    type="email"
                    value={values.email}
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                    className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-[14px] text-[var(--text)] outline-none focus:border-opal"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[13px] text-[var(--text-dim)] sm:col-span-2">
                  {t.form.company}
                  <input
                    value={values.company}
                    onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
                    className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-[14px] text-[var(--text)] outline-none focus:border-opal"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[13px] text-[var(--text-dim)] sm:col-span-2">
                  {t.form.message}
                  <textarea
                    required
                    rows={4}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    className="resize-none rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-[14px] text-[var(--text)] outline-none focus:border-opal"
                  />
                </label>
                <div className="sm:col-span-2">
                  <MagneticButton as="button" type="submit" className="w-full justify-center">
                    {t.form.submit}
                  </MagneticButton>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
