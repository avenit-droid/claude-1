"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  className,
  onClick,
  as = "button",
  href,
  variant = "primary",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const Comp = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
      data-magnetic
    >
      <Comp
        {...(as === "a" ? { href } : { onClick, type })}
        className={cn(
          "relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300",
          variant === "primary"
            ? "bg-opal text-ink hover:bg-opal-soft"
            : "border border-[var(--border)] text-[var(--text)] hover:border-opal",
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
