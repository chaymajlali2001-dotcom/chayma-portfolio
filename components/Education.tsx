import { education } from "@/data/cv";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="border-b border-line/60">
      <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
        <Reveal>
          <h2 className="font-display text-2xl italic text-ink sm:text-3xl">Formation</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-line/60 border-t border-line/60">
          {education.map((e, i) => (
            <Reveal
              key={e.degree}
              delay={i * 70}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <div>
                <h3 className="text-ink">{e.degree}</h3>
                <p className="text-sm text-muted">
                  {e.school} · {e.place}
                </p>
              </div>
              <span className="font-mono text-xs text-muted">{e.period}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}