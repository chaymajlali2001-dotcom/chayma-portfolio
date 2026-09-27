import { experiences } from "@/data/cv";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line/60 bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
        <Reveal>
          <h2 className="font-display text-2xl italic text-ink sm:text-3xl">Expérience</h2>
        </Reveal>

        <ol className="mt-10 border-l border-line">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.role + exp.org}
              delay={i * 60}
              className="relative pb-12 pl-8 last:pb-0"
            >
              <li className="list-none">
                <span
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-teal transition-transform duration-300 hover:scale-125"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-medium text-ink">{exp.role}</h3>
                  <span className="font-mono text-xs text-muted">{exp.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-teal">
                  {exp.org} · {exp.place}
                </p>
                <p className="mt-3 max-w-prose text-sm italic text-muted">{exp.project}</p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="max-w-prose text-sm leading-relaxed text-ink/90">
                      {p}
                    </li>
                  ))}
                </ul>
                {exp.stack.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}