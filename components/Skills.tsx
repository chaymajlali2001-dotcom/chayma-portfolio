import { skills } from "@/data/cv";
import Reveal from "@/components/Reveal";

export default function Skills() {
  const categories = Object.entries(skills);
  return (
    <section id="skills" className="border-b border-line/60 bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
        <Reveal>
          <h2 className="font-display text-2xl italic text-ink sm:text-3xl">Compétences</h2>
        </Reveal>
        <div className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], i) => (
            <Reveal key={category} delay={i * 60}>
              <h3 className="text-sm text-teal">{category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-line bg-bg px-2.5 py-1 font-mono text-xs text-ink transition-colors hover:border-teal hover:text-teal"
                  >
                    {item}
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