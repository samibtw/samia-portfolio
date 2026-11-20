import Reveal from "./Reveal";

const FACTS = [
  {
    k: "EDUCATION",
    v: "Industrial Engineering, Universidad de Lima",
    note: "Graduating 2027",
  },
  {
    k: "LANGUAGES",
    v: "English advanced · Spanish native",
    note: "German intermediate",
  },
  {
    k: "AVAILABILITY",
    v: "Full-time for the 12-week internship",
    note: "Summer 2027",
  },
  {
    k: "ALSO",
    v: "Babson Build Entrepreneurship Program",
    note: "Babson College, Jul 2025",
    href: "#babson",
  },
];

export default function Facts() {
  return (
    <section aria-label="Quick facts" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f, i) => (
            <li key={f.k}>
              <Reveal delay={i * 90} className="h-full">
                <div className="h-full border-l-2 border-accent pl-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {f.k}
                  </p>
                  <p className="mt-1 text-base font-bold leading-snug">
                    {f.href ? (
                      <a
                        href={f.href}
                        className="transition-colors hover:text-accent"
                      >
                        {f.v}
                      </a>
                    ) : (
                      f.v
                    )}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {f.note}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
