"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const STEPS = [
  { n: "01", title: "Excel", note: "Where it started" },
  { n: "02", title: "WhatsApp chatbot", note: "Talking to customers" },
  { n: "03", title: "Sales website", note: "A storefront of our own" },
  { n: "04", title: "Customer database", note: "Knowing who we serve" },
];

const CARDS = [
  {
    tag: "TODAY",
    title: "Junior Sales Advisor",
    body: "At a heavy machinery company since Oct 2026. I work the sales cycle and create its social content: carousels, videos, catalogs and a content calendar.",
  },
  {
    tag: "MY OWN TOOL",
    title: "A video editor I built",
    body: "I used to edit in CapCut. Then I found out I could do it with Claude Code, so I built my own editor.",
  },
  {
    tag: "UNIVERSITY",
    title: "Citizen requests prototype",
    body: "A project to register and respond to requests that citizens send to local authorities.",
  },
];

export default function Builder() {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="space-y-12">
      <Reveal>
        <p className="max-w-2xl text-lg text-muted sm:text-xl">
          In 2026 I co-founded an online sales startup with a teammate I met in
          VALORANT. Jan to Sep, we took it from a spreadsheet to a real system:
        </p>
      </Reveal>

      <ol ref={ref} className="grid gap-6 md:grid-cols-4 md:gap-8">
        {STEPS.map((s, i) => (
          <li key={s.n} className="relative">
            <div
              className={`step brackets h-full border bg-panel/70 p-6 ${on ? "on" : ""}`}
              style={{ transitionDelay: `${i * 700}ms` }}
            >
              <p className="font-mono text-xs tracking-[0.2em] text-accent">
                {s.n}
              </p>
              <h3 className="mt-4 text-xl font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 font-mono text-xs text-muted">{s.note}</p>
            </div>
            {i < STEPS.length - 1 && (
              <>
                {/* desktop: horizontal link; mobile: vertical link */}
                <span
                  aria-hidden
                  className={`link absolute left-full top-1/2 hidden h-[2px] w-8 -translate-y-1/2 md:block ${on ? "on" : ""}`}
                  style={{ transitionDelay: `${i * 700 + 500}ms` }}
                />
                <span
                  aria-hidden
                  className={`link-v absolute left-8 top-full block h-6 w-[2px] md:hidden ${on ? "on" : ""}`}
                  style={{ transitionDelay: `${i * 700 + 500}ms` }}
                />
              </>
            )}
          </li>
        ))}
      </ol>

      <Reveal>
        <p className="border-l-2 border-accent pl-4 text-lg font-medium sm:text-xl">
          Every step had the same goal: talk to customers and understand what
          they need.
        </p>
      </Reveal>

      <div id="babson" className="grid items-start gap-8 md:grid-cols-[1fr_240px_240px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {"// Babson Build · Jul 2025"}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            A week at Babson College
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            I joined the Babson Build Entrepreneurship Program (July 7 to 11,
            2025). We worked on entrepreneurship, leadership, innovation and
            design thinking with people from all over the world.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <figure className="brackets border border-line bg-panel/70 p-1.5">
            <Image
              src="/media/babson-photo.webp"
              alt="Samia Nakhoul holding her certificate on the steps of Babson College"
              width={900}
              height={1200}
              className="w-full"
            />
            <figcaption className="px-1 pb-1 pt-2 font-mono text-[11px] text-muted">
              At Babson College
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={200}>
          <figure className="brackets border border-line bg-panel/70 p-1.5">
            <Image
              src="/media/babson-cert.webp"
              alt="Babson College certificate for the Babson Build Entrepreneurship Program, July 7 to 11, 2025"
              width={900}
              height={1200}
              className="w-full"
            />
            <figcaption className="px-1 pb-1 pt-2 font-mono text-[11px] text-muted">
              Program certificate
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <ul className="grid gap-4 md:grid-cols-3">
        {CARDS.map((c, i) => (
          <li key={c.tag}>
            <Reveal delay={i * 120} className="h-full">
              <article className="brackets h-full border border-line bg-panel/70 p-6 transition-colors hover:border-accent/60">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {c.tag}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {c.body}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
