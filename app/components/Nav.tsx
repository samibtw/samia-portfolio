const links = [
  { href: "#story", label: "Story" },
  { href: "#climb", label: "Climb" },
  { href: "#creator", label: "Creator" },
  { href: "#builder", label: "Builder" },
  { href: "#insight", label: "Insight" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-bold tracking-widest">
          SAMIA<span className="text-accent">{"//"}</span>NAKHOUL
        </a>
        <ul className="no-scrollbar -mr-2 flex gap-1 overflow-x-auto font-mono text-xs uppercase tracking-wider text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block px-2 py-2 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
