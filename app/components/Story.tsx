import Image from "next/image";
import Reveal from "./Reveal";

const SLOTS = [
  {
    n: "01",
    tag: "PARTNER",
    title: "A business partner",
    body: "I met a teammate in a VALORANT match. In 2026 we co-founded an online sales startup together.",
  },
  {
    n: "02",
    tag: "TEAM",
    title: "A team",
    body: "I formed NYX with my friends and lead it as in-game leader. We played the VCT Game Changers LATAM South Open Qualifier (2026) and the Gamehers by Kotex 2025 national qualifier in Peru, where we made the semifinals.",
  },
  {
    n: "03",
    tag: "FRIENDS",
    title: "A friend group",
    body: "I streamed VALORANT on Twitch just for fun from 2021 to 2023. My most loyal viewers became real-life friends. We still meet, and we watch VCT together.",
  },
];

export default function Story() {
  return (
    <div>
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="brackets w-40 shrink-0 border border-line bg-panel p-1.5 sm:w-48">
            <Image
              src="/media/samia.webp"
              alt="Samia Nakhoul"
              width={720}
              height={900}
              className="aspect-[4/5] w-full object-cover"
              priority={false}
            />
          </div>
          <p className="max-w-2xl text-lg text-muted sm:text-xl">
            Ranked was never the whole story. Three things that started in a
            lobby:
          </p>
        </div>
      </Reveal>

      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {SLOTS.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 120} className="h-full">
              <article className="brackets group h-full border border-line bg-panel/70 p-6 transition-colors hover:border-accent/60">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em]">
                  <span className="text-accent">{s.n}</span>
                  <span className="text-muted">{s.tag}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {s.body}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={150}>
        <p className="mt-8 font-mono text-sm text-muted">
          Outside VALORANT, I also play League of Legends and TFT with friends.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-10 border-l-2 border-accent pl-4 text-lg font-medium sm:text-xl">
          I know what it feels like when a game turns into people. That&apos;s what
          I want to work on.
        </p>
      </Reveal>
    </div>
  );
}
