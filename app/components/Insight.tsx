import Reveal from "./Reveal";

const BRING = [
  {
    n: "01",
    title: "I think like a player",
    body: "Since 2020 I've played VALORANT as a competitor, a creator and a fan, so I know what players notice and care about.",
  },
  {
    n: "02",
    title: "I know both sides of creators",
    body: "I've grown a TikTok account, streamed on Twitch and played next to creators at Pícaras. I'd help campaigns feel natural to them.",
  },
  {
    n: "03",
    title: "I listen and report",
    body: "I'd help bring what players say, and the trends I notice, to the team in short, clear reports. I like data.",
  },
];

export default function Insight() {
  return (
    <div className="space-y-10">
      <Reveal>
        <p className="max-w-2xl text-lg text-muted sm:text-xl">
          The best parts of VALORANT were never only the gameplay. They were
          whether players felt heard, welcomed and connected. I know it from
          LATAM, and I&apos;d love to bring that local eye to a global team.
        </p>
      </Reveal>

      <ul className="grid gap-4 md:grid-cols-3">
        {BRING.map((it, i) => (
          <li key={it.n}>
            <Reveal delay={i * 100} className="h-full">
              <article className="brackets h-full border border-line bg-panel/70 p-6 transition-colors hover:border-accent/60">
                <p className="font-mono text-xs tracking-[0.2em] text-accent">
                  {it.n}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {it.body}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <p className="border-l-2 border-accent pl-4 text-lg font-medium sm:text-xl">
          I&apos;d come to learn how Riot&apos;s teams work, help wherever I&apos;m
          useful, and keep the player&apos;s voice in the room.
        </p>
      </Reveal>
    </div>
  );
}
