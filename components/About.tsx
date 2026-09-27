import { languages, certifications } from "@/data/cv";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-line/60">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 sm:py-20 md:grid-cols-[1fr_1fr]">
        <Reveal>
          <h2 className="font-display text-2xl italic text-ink sm:text-3xl">Profil</h2>
          <p className="mt-5 max-w-prose text-muted leading-relaxed">
            Ingénieure en Génie Logiciel, j&rsquo;ai construit mon expérience autour d&rsquo;un principe simple : un
            bon système se juge à la clarté de son code et à la confiance qu&rsquo;on peut lui accorder. J&rsquo;aime
            particulièrement les projets où le logiciel rencontre un métier concret — agroalimentaire, banque,
            industrie — et où l&rsquo;intelligence artificielle vient renforcer, sans jamais remplacer, la rigueur
            du système.
          </p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-2 gap-x-8 gap-y-8">
          <div>
            <h3 className="text-sm text-teal">Langues</h3>
            <ul className="mt-3 space-y-1.5">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between gap-4 text-sm text-ink">
                  <span>{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-teal">Certifications</h3>
            <ul className="mt-3 space-y-1.5">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-ink">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}