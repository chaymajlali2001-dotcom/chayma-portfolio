const links = [
  { href: "#about", label: "Profil" },
  { href: "#experience", label: "Expérience" },
  { href: "#skills", label: "Compétences" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg italic text-ink focus-ring rounded">
          Chayma Jlali
        </a>
        <ul className="hidden gap-7 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-sm text-muted transition-colors hover:text-ink focus-ring rounded"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/cv-chayma-jlali.pdf"
          download="CV-Chayma-Jlali.pdf"
          className="focus-ring rounded-sm border border-line px-4 py-1.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
        >
          CV
        </a>
      </nav>
    </header>
  );
}