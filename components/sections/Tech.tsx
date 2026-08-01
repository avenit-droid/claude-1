"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLuxoraStore } from "@/lib/store";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

const CoreScene = dynamic(() => import("@/components/three/CoreScene"), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Tech() {
  const locale = useLuxoraStore((s) => s.locale);
  const t = content[locale].tech;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".tech-stage");
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${(panels.length - 1) * 100}%`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const idx = Math.min(panels.length - 1, Math.floor(self.progress * panels.length));
          setActive(idx);
        },
      });
      return () => st.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="tech" ref={sectionRef} className="relative h-[400vh] bg-void">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0 opacity-70" aria-hidden>
          <CoreScene stage={2} />
        </div>

        <div className="container-luxora relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-aurora">{t.eyebrow}</p>
            <h2 className="font-display text-fluid-h1 text-chrome">{t.title}</h2>
            <p className="mt-5 max-w-md text-[15px] text-[var(--text-dim)]">{t.lead}</p>

            <div className="mt-10 flex gap-2" role="tablist" aria-label="Этапы технологии">
              {t.stages.map((stage, i) => (
                <div
                  key={stage.title}
                  role="tab"
                  aria-selected={active === i}
                  className={cn(
                    "h-1 flex-1 rounded-full bg-[var(--border)] transition-colors duration-500",
                    active === i && "bg-opal"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[240px]">
            {t.stages.map((stage, i) => (
              <div
                key={stage.title}
                className="tech-stage absolute inset-0 flex flex-col justify-center transition-all duration-500"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "translateY(0)" : "translateY(24px)",
                  pointerEvents: active === i ? "auto" : "none",
                }}
              >
                <span className="font-mono text-[12px] text-[var(--text-dim)]">
                  {String(i + 1).padStart(2, "0")} / {String(t.stages.length).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-3xl text-opal">{stage.title}</h3>
                <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-[var(--text-dim)]">{stage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
