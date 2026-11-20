import Image from "next/image";
import Reveal from "./Reveal";

const STATS = [
  { v: "172.8K", k: "TikTok followers today" },
  { v: "8.6M", k: "Views on one video" },
  { v: "0", k: "Paid promotion" },
];

const VIDEOS = [
  { src: "/media/picaras-1.mp4", poster: "/media/picaras-1.jpg", n: "01", label: "Pícaras Arena Clash broadcast footage, part 1" },
  { src: "/media/picaras-2.mp4", poster: "/media/picaras-2.jpg", n: "02", label: "Pícaras Arena Clash broadcast footage, part 2" },
];

const CLIPS = [
  {
    src: "/media/twitch-1.mp4",
    poster: "/media/twitch-1.jpg",
    title: "EL MEJOR ACE DEL MUNDO",
    ago: "4 years ago",
  },
  {
    src: "/media/twitch-2.mp4",
    poster: "/media/twitch-2.jpg",
    title: "POOO QUE TAL SAMI",
    ago: "5 years ago",
  },
];

export default function Creator() {
  return (
    <div className="space-y-16">
      {/* TikTok */}
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <Reveal>
            <p className="max-w-2xl text-lg text-muted sm:text-xl">
              In 2020 I started growing a TikTok account. Today it has 172.8K
              followers, all organic: no ads, no paid promotion. Comedy
              sketches in Spanish, with several videos past 1M views.
            </p>
          </Reveal>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.k} delay={i * 100}>
                <div className="brackets h-full border border-line bg-panel/70 p-6">
                  <dd className="font-mono text-5xl font-bold tabular-nums text-fg">
                    {s.v}
                  </dd>
                  <dt className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {s.k}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={150}>
          <figure className="brackets mx-auto w-full max-w-[280px] border border-line bg-panel/70 p-1.5 lg:mx-0">
            <Image
              src="/media/tiktok-profile.webp"
              alt="Screenshot of my TikTok profile showing comedy sketch videos with view counts from 260K to 8.6M"
              width={738}
              height={1354}
              className="w-full"
            />
            <figcaption className="px-1 pb-1 pt-2 font-mono text-[11px] text-muted">
              My TikTok profile, view counts from the app
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Picaras */}
      <div>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {"// Pícaras Arena Clash · 2nd place"}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Playing next to creators
          </h3>
          <p className="mt-3 max-w-2xl text-base text-muted">
            A mixed VALORANT tournament at Infinity Gaming Center in Lima, with
            content creators as team captains. My team finished second.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.n} delay={i * 120}>
              <figure className="brackets border border-line bg-panel/70 p-3">
                <video
                  className="aspect-video w-full bg-black"
                  controls
                  playsInline
                  preload="none"
                  poster={v.poster}
                  aria-label={v.label}
                  title={v.label}
                >
                  <source src={v.src} type="video/mp4" />
                  {v.label}
                </video>
                <figcaption className="px-1 pb-1 pt-3 font-mono text-xs text-muted">
                  <span className="text-accent">{v.n}</span> · Footage from the
                  Pícaras Arena Clash broadcast (Infinity Gaming Center)
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* My real X post, so it can be checked */}
      <div>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {"// On X"}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Gameplay I shared
          </h3>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <figure className="brackets border border-line bg-panel/70 p-3">
              <video
                className="aspect-video w-full bg-black"
                controls
                playsInline
                preload="none"
                poster="/media/x-clip.jpg"
                aria-label="Gameplay clip from my X post, Jul 22, 2024"
                title="Gameplay clip from my X post, Jul 22, 2024"
              >
                <source src="/media/x-clip.mp4" type="video/mp4" />
                Gameplay clip from my X post, Jul 22, 2024
              </video>
              <figcaption className="px-1 pb-1 pt-3 font-mono text-xs text-muted">
                Gameplay clip I posted on X · Jul 22, 2024
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <a
              href="https://x.com/sxmibtw/status/1815489882925433165"
              target="_blank"
              rel="noopener noreferrer"
              className="brackets group flex h-full flex-col justify-between border border-line bg-panel/70 p-6 transition-colors hover:border-accent/60"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  @sxmibtw · Jul 22, 2024
                </p>
                <p className="mt-4 text-2xl font-bold tracking-tight">
                  &ldquo;de cuando pegaba&rdquo;
                </p>
              </div>
              <p className="mt-6 font-mono text-sm text-accent transition-transform group-hover:translate-x-1">
                See the original post on X →
              </p>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Twitch clips: video files only, no channel name or link */}
      <div>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {"// From my stream"}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Streaming for fun
          </h3>
          <p className="mt-3 max-w-2xl text-base text-muted">
            I streamed VALORANT on Twitch from 2021 to 2023 and grew a small
            community of about 2,000 followers.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {CLIPS.map((c, i) => (
            <Reveal key={c.src} delay={i * 120}>
              <figure className="brackets border border-line bg-panel/70 p-3">
                <video
                  className="aspect-video w-full bg-black"
                  controls
                  playsInline
                  preload="none"
                  poster={c.poster}
                  aria-label={`${c.title}, clip from my Twitch stream`}
                  title={`${c.title}, clip from my Twitch stream`}
                >
                  <source src={c.src} type="video/mp4" />
                  {`${c.title}, clip from my Twitch stream`}
                </video>
                <figcaption className="px-1 pb-1 pt-3 font-mono text-xs text-muted">
                  <span className="text-accent">{c.title}</span> · Clip from my
                  Twitch stream · {c.ago}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
