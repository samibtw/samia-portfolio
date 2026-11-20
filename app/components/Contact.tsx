import Reveal from "./Reveal";

const TRACKER =
  "https://tracker.gg/valorant/profile/riot/softcore%23TNBHH/overview";

const ITEMS = [
  {
    k: "EMAIL",
    v: "samianak13@gmail.com",
    href: "mailto:samianak13@gmail.com",
  },
  {
    k: "LINKEDIN",
    v: "samia-nakhoul-diaz-a178b414b",
    href: "https://www.linkedin.com/in/samia-nakhoul-diaz-a178b414b/",
  },
  { k: "RIOT ID", v: "softcore#TNBHH", href: TRACKER },
  { k: "CV", v: "Download PDF", href: "/cv/Samia_Nakhoul_CV.pdf" },
];

export default function Contact() {
  return (
    <div>
      <Reveal>
        <p className="max-w-xl text-lg text-muted sm:text-xl">
          Based in Lima, Peru. Happy to talk about players, creators and
          communities.
        </p>
      </Reveal>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {ITEMS.map((it, i) => (
          <li key={it.k}>
            <Reveal delay={i * 90} className="h-full">
              <a
                href={it.href}
                {...(it.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(it.href.endsWith(".pdf") ? { download: true } : {})}
                className="brackets group block h-full border border-line bg-panel/70 p-6 transition-colors hover:border-accent/60"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {it.k}
                </p>
                <p className="mt-2 break-all text-xl font-bold tracking-tight transition-colors group-hover:text-accent">
                  {it.v}
                </p>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={200}>
        <p className="mt-10 font-mono text-xs text-muted">
          Riot ID links to my{" "}
          <a
            href={TRACKER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4"
          >
            VALORANT tracker
          </a>
          .
        </p>
      </Reveal>
    </div>
  );
}
