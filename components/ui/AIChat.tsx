"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";

interface Message {
  id: number;
  role: "user" | "aether";
  text: string;
}

const KNOWLEDGE: Record<string, { ru: string; en: string }> = {
  material: {
    ru: "CORE — сплав жидкого металла со встроенной нейросетью: он меняет жёсткость за 0.4мс и восстанавливает микроповреждения за 6 часов силами био-синтеза.",
    en: "CORE is a liquid-metal alloy with an embedded neural network: it shifts rigidity within 0.4ms and repairs micro-damage in 6 hours via bio-synthesis.",
  },
  price: {
    ru: "Пилотное внедрение начинается от 42 000 € за партию до 40 м². Для серийных объёмов есть план Deployment от 310 000 € в год — подробности в разделе «Тарифы».",
    en: "A pilot deployment starts at €42,000 for up to 40m². For larger volumes, the Deployment plan starts at €310,000/year — see the Pricing section for details.",
  },
  time: {
    ru: "Пилотный образец мы готовим за 6–8 недель с момента подписания брифа. Промышленное внедрение занимает от 4 месяцев в зависимости от объёма.",
    en: "We prepare a pilot sample within 6–8 weeks of the brief. Full industrial deployment takes 4+ months depending on scale.",
  },
  team: {
    ru: "За CORE стоит команда материаловедов, нейроинженеров и художников формы — подробнее в разделе «Команда».",
    en: "CORE is built by a team of materials scientists, neuro-engineers, and form artists — see the Team section for details.",
  },
  default: {
    ru: "Хороший вопрос. Я передал его инженерной команде LUXORA — а пока загляните в разделы «Технологии» и «Продукты», там есть детальные ответы.",
    en: "Good question. I've routed it to the LUXORA engineering team — meanwhile, check the Technology and Products sections for detailed answers.",
  },
};

function pickAnswer(input: string, locale: "ru" | "en"): string {
  const q = input.toLowerCase();
  if (/матери|alloy|material|core\b/.test(q)) return KNOWLEDGE.material[locale];
  if (/цена|стоим|price|cost|тариф/.test(q)) return KNOWLEDGE.price[locale];
  if (/срок|время|когда|time|deploy|when/.test(q)) return KNOWLEDGE.time[locale];
  if (/команд|team|кто дела/.test(q)) return KNOWLEDGE.team[locale];
  return KNOWLEDGE.default[locale];
}

let idCounter = 1;

export default function AIChat() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].ai.chat;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ id: 0, role: "aether", text: t.greeting }]);
  }, [t.greeting]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const send = () => {
    const value = input.trim();
    if (!value) return;
    idCounter += 1;
    const userMsg: Message = { id: idCounter, role: "user", text: value };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);

    window.setTimeout(() => {
      idCounter += 1;
      const answer = pickAnswer(value, locale);
      setMessages((m) => [...m, { id: idCounter, role: "aether", text: answer }]);
      setThinking(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <div className="glass flex h-[440px] flex-col rounded-3xl p-5">
      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto pr-1" aria-live="polite">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed ${
                  m.role === "user"
                    ? "bg-opal text-ink"
                    : "border border-[var(--border)] text-[var(--text)]"
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {thinking && (
          <div className="flex items-center gap-1 pl-1 text-[12px] text-[var(--text-dim)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aurora" />
            {t.thinking}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-[var(--border)] pt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder={t.placeholder}
          className="flex-1 bg-transparent text-[14px] text-[var(--text)] outline-none placeholder:text-[var(--text-dim)]"
          aria-label={t.placeholder}
        />
        <button
          onClick={send}
          className="rounded-full bg-opal px-4 py-2 text-[12px] font-medium text-ink"
          data-magnetic
        >
          {t.send}
        </button>
      </div>
    </div>
  );
}
