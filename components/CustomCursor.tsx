"use client";

import { useEffect, useRef } from "react";
import { useLuxoraStore } from "@/lib/store";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const cursorVariant = useLuxoraStore((s) => s.cursorVariant);
  const setCursorVariant = useLuxoraStore((s) => s.setCursorVariant);

  useEffect(() => {
    let ringX = 0,
      ringY = 0,
      dotX = 0,
      dotY = 0,
      targetX = 0,
      targetY = 0;

    const move = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onOver = (e: Event) => {
      const el = (e.target as HTMLElement).closest("[data-magnetic], a, button");
      if (el) setCursorVariant("hover");
    };
    const onOut = (e: Event) => {
      const el = (e.target as HTMLElement).closest("[data-magnetic], a, button");
      if (el) setCursorVariant("default");
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);

    let raf: number;
    const tick = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      dotX += (targetX - dotX) * 0.45;
      dotY += (targetY - dotY) * 0.45;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%,-50%) scale(var(--cursor-scale))`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [setCursorVariant]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--cursor-scale",
      cursorVariant === "hover" ? "2.4" : cursorVariant === "text" ? "3.2" : "1"
    );
  }, [cursorVariant]);

  return (
    <>
      <div ref={ringRef} className="cursor-root" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
