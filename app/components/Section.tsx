import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {`// ${index} ${label}`}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal className="mt-10" delay={120}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
