"use client";

import { useLayoutEffect, useRef } from "react";

const ROLES = ["Two-time Radiant", "In-game leader", "Creator", "Builder"];

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

// The real value is in the server HTML ("#165"), so crawlers and readers
// without JavaScript see the final number. The animation only replays it.
function CountUp({ target, duration = 1600 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia(REDUCED_QUERY).matches) return;
    el.textContent = "0";
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.textContent = String(target);
    };
  }, [target, duration]);
  return <span ref={ref}>{target}</span>;
}

// Same idea: the first role is in the server HTML, typing is an enhancement.
function Typewriter({ words }: { words: string[] }) {
  const ref = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia(REDUCED_QUERY).matches) return;
    el.textContent = "";
    let w = 0;
    let c = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      const word = words[w];
      if (!deleting) {
        c++;
        el.textContent = word.slice(0, c);
        if (c === word.length) {
          deleting = true;
          timer = setTimeout(step, 1400);
          return;
        }
        timer = setTimeout(step, 70);
      } else {
        c--;
        el.textContent = word.slice(0, c);
        if (c === 0) {
          deleting = false;
          w = (w + 1) % words.length;
          timer = setTimeout(step, 250);
          return;
        }
        timer = setTimeout(step, 35);
      }
    };
    timer = setTimeout(step, 600);
    return () => {
      clearTimeout(timer);
      el.textContent = words[0];
    };
  }, [words]);
  return <span ref={ref}>{words[0]}</span>;
}

const STATS = [
  { k: "VALORANT since", v: "2020" },
  { k: "Competitive hours", v: "5,600+" },
  { k: "Acts at Immortal+", v: "23" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-14"
      aria-label="Introduction"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:items-center md:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {"// Lima, Peru · Community Manager Intern application"}
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
            Samia
            <br />
            Nakhoul
          </h1>

          <p className="mt-6 h-8 font-mono text-lg text-fg sm:text-xl" aria-hidden>
            <span className="text-accent">&gt; </span>
            <Typewriter words={ROLES} />
            <span className="caret" />
          </p>
          <p className="sr-only">
            Two-time Radiant, in-game leader, creator and builder.
          </p>

          <p className="mt-6 max-w-lg text-base text-muted sm:text-lg">
            VALORANT gave me a business partner, a team and a real-life friend
            group. I want to help build that for other players.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#story"
              className="bg-accent px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110"
            >
              My story
            </a>
            <a
              href="/cv/Samia_Nakhoul_CV.pdf"
              download
              className="border border-line px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* HUD rank panel */}
        <div className="brackets border border-line bg-panel/80 p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            Peak leaderboard · LATAM
          </p>
          <p
            className="mt-3 font-mono text-7xl font-bold tabular-nums leading-none sm:text-8xl"
            aria-label="Number 165, LATAM leaderboard"
          >
            <span className="text-accent">#</span>
            <CountUp target={165} />
          </p>
          <p className="mt-2 font-mono text-sm text-muted">
            Episode 6 · Act 2 · Radiant
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5 font-mono text-xs">
            <div>
              <p className="text-muted">RADIANT #1</p>
              <p className="mt-1 text-fg">E6A2 · #165</p>
            </div>
            <div>
              <p className="text-muted">RADIANT #2</p>
              <p className="mt-1 text-fg">E7A2 · #309</p>
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
            {STATS.map((s) => (
              <div key={s.k}>
                <dt className="font-mono text-[10px] uppercase leading-tight text-muted">
                  {s.k}
                </dt>
                <dd className="mt-1 text-lg font-bold">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
