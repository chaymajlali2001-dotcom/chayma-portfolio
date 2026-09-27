import { academicProjects } from "@/data/cv";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line/60">
      <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
        <Reveal>
          <h2 className="font-display text-2xl italic text-ink sm:text-3xl">Projets académiques</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {academicProjects.map((proj, i) => (
            <Reveal key={proj.title} delay={i * 80} className="border border-line p-6 transition-colors duration-300 hover:border-teal/60">
              <h3 className="font-medium text-ink">{proj.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{proj.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {proj.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}