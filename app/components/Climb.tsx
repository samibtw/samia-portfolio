"use client";

import { useEffect, useRef, useState } from "react";
import { ACTS, TIERS, actName } from "../data/ranks";
import Reveal from "./Reveal";

const W = 1000;
const H = 340;
const PAD = { l: 96, r: 24, t: 20, b: 40 };
const PLOT_W = W - PAD.l - PAD.r;
const PLOT_H = H - PAD.t - PAD.b;
const MAX = TIERS.length - 1;

const x = (i: number) => PAD.l + (i / (ACTS.length - 1)) * PLOT_W;
const y = (t: number) => PAD.t + ((MAX - t) / MAX) * PLOT_H;
const tierIdx = (r: string) => TIERS.indexOf(r as (typeof TIERS)[number]);

const GRID = [
  { label: "Silver", t: 0 },
  { label: "Gold", t: 3 },
  { label: "Platinum", t: 6 },
  { label: "Diamond", t: 9 },
  { label: "Ascendant", t: 12 },
  { label: "Immortal", t: 15 },
  { label: "Radiant", t: 18 },
];

const MILESTONES = [
  {
    tag: "RADIANT #1",
    title: "Episode 6 · Act 2",
    body: "Radiant at 263 RR. Peak #165 on the LATAM leaderboard.",
  },
  {
    tag: "RADIANT #2",
    title: "Episode 7 · Act 2",
    body: "Back to Radiant at 270 RR. Finished #309.",
  },
  {
    tag: "TEAM NYX",
    title: "In-game leader",
    body: "I formed the team with my friends and call the game.",
  },
  {
    tag: "2026",
    title: "VCT Game Changers LATAM South",
    body: "Played the Open Qualifier as NYX's IGL.",
  },
  {
    tag: "2025",
    title: "Gamehers by Kotex",
    body: "Peru national qualifier. NYX made the semifinals.",
  },
  {
    tag: "2ND PLACE",
    title: "Pícaras Arena Clash",
    body: "Mixed tournament with creators as captains, at Infinity Gaming Center in Lima.",
  },
];

const PEAK = ACTS.findIndex((a) => a.id === "E6A2");

export default function Climb() {
  const [active, setActive] = useState(PEAK);
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pts = ACTS.map((a, i) => [x(i), y(tierIdx(a.rank))] as const);
  const path = pts.map(([px, py], i) => `${i ? "L" : "M"}${px},${py}`).join(" ");
  const a = ACTS[active];

  return (
    <div className="space-y-12">
      <Reveal>
        <p className="max-w-2xl text-lg text-muted sm:text-xl">
          Peak rank in every act since Episode 3. Started at Silver 1, hit
          Radiant twice, and stayed Immortal or higher for 23 acts. Hover or
          tap a point.
        </p>
      </Reveal>

      <Reveal>
        <div className="brackets border border-line bg-panel/70 p-4 sm:p-6">
          {/* readout */}
          <div
            className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-line pb-4 font-mono"
            aria-live="polite"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Act
              </p>
              <p className="text-lg font-bold">{actName(a.id)}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Peak rank
              </p>
              <p
                className={`text-lg font-bold ${a.rank === "Radiant" ? "text-accent" : ""}`}
              >
                {a.rank}
                {a.rr ? ` · ${a.rr} RR` : ""}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Leaderboard
              </p>
              <p className="text-lg font-bold">{a.lb ? `#${a.lb}` : "n/a"}</p>
            </div>
          </div>

          <div ref={ref} className="no-scrollbar overflow-x-auto">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="mt-4 min-w-[720px] w-full"
              role="img"
              aria-label="Line chart of my peak rank in each act, from Silver 1 to Radiant"
            >
              {GRID.map((g) => (
                <g key={g.label}>
                  <line
                    x1={PAD.l}
                    x2={W - PAD.r}
                    y1={y(g.t)}
                    y2={y(g.t)}
                    stroke={g.label === "Radiant" ? "#ff3b4e" : "#222a33"}
                    strokeOpacity={g.label === "Radiant" ? 0.45 : 1}
                    strokeDasharray="3 5"
                  />
                  <text
                    x={PAD.l - 10}
                    y={y(g.t) + 4}
                    textAnchor="end"
                    className="fill-[#8b97a5] font-mono text-[11px]"
                  >
                    {g.label}
                  </text>
                </g>
              ))}

              {ACTS.map((act, i) => {
                const m = act.id.match(/^(E\d+|V\d+)A(\d)$/)!;
                if (m[2] !== "1" && i !== 0) return null;
                return (
                  <text
                    key={act.id}
                    x={x(i)}
                    y={H - 14}
                    textAnchor="middle"
                    className="fill-[#8b97a5] font-mono text-[10px]"
                  >
                    {m[1]}
                  </text>
                );
              })}

              <path
                d={path}
                pathLength={1}
                fill="none"
                stroke="#ff3b4e"
                strokeWidth={2.5}
                strokeLinejoin="round"
                className={`draw ${drawn ? "in" : ""}`}
              />

              {ACTS.map((act, i) => {
                const [px, py] = pts[i];
                const rad = act.rank === "Radiant";
                const on = i === active;
                return (
                  <g
                    key={act.id}
                    tabIndex={0}
                    role="button"
                    aria-label={`${actName(act.id)}: ${act.rank}${act.lb ? `, leaderboard ${act.lb}` : ""}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`point cursor-pointer outline-none ${drawn ? "in" : ""}`}
                    style={{ transitionDelay: `${1400 + i * 25}ms` }}
                  >
                    <circle cx={px} cy={py} r={14} fill="transparent" />
                    <circle
                      cx={px}
                      cy={py}
                      r={rad ? 7 : on ? 6 : 3.5}
                      fill={rad || on ? "#ff3b4e" : "#0b0d10"}
                      stroke="#ff3b4e"
                      strokeWidth={2}
                    />
                    {on && (
                      <circle
                        cx={px}
                        cy={py}
                        r={12}
                        fill="none"
                        stroke="#e8ecf1"
                        strokeOpacity={0.7}
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p className="border-l-2 border-accent pl-4 text-lg font-medium sm:text-xl">
          I like to measure progress. I&apos;d bring the same habit to tracking
          and reporting the results of every campaign.
        </p>
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MILESTONES.map((m, i) => (
          <li key={m.title}>
            <Reveal delay={(i % 3) * 100} className="h-full">
              <article className="brackets h-full border border-line bg-panel/70 p-6 transition-colors hover:border-accent/60">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {m.tag}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {m.body}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <a
          href="https://tracker.gg/valorant/profile/riot/softcore%23TNBHH/overview"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-line px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider transition hover:border-accent hover:text-accent"
        >
          View my tracker →
        </a>
      </Reveal>
    </div>
  );
}
