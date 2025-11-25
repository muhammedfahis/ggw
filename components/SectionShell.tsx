"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section id={id} className="border-y border-ggwDark/5 bg-white/60">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:px-6 md:py-20 lg:flex-row"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-md space-y-3">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ggwAccent">{eyebrow}</p>}
          {title && <h2 className="text-2xl md:text-3xl font-heading font-semibold text-ggwDark">{title}</h2>}
          {description && <p className="text-sm text-ggwDark/70">{description}</p>}
        </div>
        <div className="flex-1 text-sm text-ggwDark/80 leading-relaxed">{children}</div>
      </motion.div>
    </section>
  );
}
