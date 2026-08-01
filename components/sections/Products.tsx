"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Products() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].products;
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const distance = track.scrollWidth - window.innerWidth;
      if (distance <= 0) return;

      const tween = gsap.to(track, { x: -distance, ease: "none" });
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${distance}`,
        pin: true,
        scrub: 0.5,
        animation: tween,
      });
      return () => st.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative overflow-hidden bg-void py-0">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center">
        <div className="container-luxora mb-10">
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">{t.eyebrow}</p>
          <h2 className="font-display text-fluid-h1 text-chrome">{t.title}</h2>
          <p className="mt-3 max-w-lg text-[15px] text-[var(--text-dim)]">{t.lead}</p>
        </div>

        <div ref={trackRef} className="flex gap-8 pl-[4vw] will-change-transform">
          {t.items.map((item, i) => (
            <article
              key={item.name}
              className="glass w-[82vw] shrink-0 rounded-3xl p-10 sm:w-[520px]"
            >
              <span className="font-mono text-[12px] text-[var(--text-dim)]">
                {String(i + 1).padStart(2, "0")} — {item.tag}
              </span>
              <h3 className="mt-4 font-display text-3xl text-opal">{item.name}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-dim)]">{item.text}</p>
            </article>
          ))}
          <div className="w-[4vw] shrink-0" aria-hidden />
        </div>
      </div>
    </section>
  );
}
