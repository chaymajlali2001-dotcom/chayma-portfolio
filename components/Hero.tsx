import Image from "next/image";
import { profile } from "@/data/cv";
import FloatingIcons from "@/components/FloatingIcons";
import Terminal from "@/components/Terminal";

export default function Hero() {
  return (
    <section id="top" className="row-texture relative overflow-hidden border-b border-line/60">
      <FloatingIcons />
      <div className="mx-auto grid max-w-content gap-10 px-6 py-20 sm:py-28 md:grid-cols-[1.3fr_0.9fr] md:items-center">
        <div>
          <p className="mb-5 animate-fade-up text-sm text-teal [animation-delay:0ms]">
            {profile.role} · {profile.location}
          </p>
          <h1 className="animate-fade-up font-display text-4xl leading-[1.08] tracking-tight text-ink [animation-delay:90ms] sm:text-6xl">
            Je transforme des processus métier complexes en logiciels{" "}
            <span className="italic text-teal">clairs et fiables</span>.
          </h1>
          <p className="mt-7 max-w-prose animate-fade-up text-base leading-relaxed text-muted [animation-delay:180ms] sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-4 [animation-delay:270ms]">
            <a
              href="/cv-chayma-jlali.pdf"
              download="CV-Chayma-Jlali.pdf"
              className="focus-ring rounded-sm bg-teal px-5 py-2.5 text-sm font-medium text-bg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-soft"
            >
              Télécharger mon CV
            </a>
            <a
              href="#experience"
              className="focus-ring rounded-sm border border-line px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              Voir mon parcours
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring rounded-sm border border-line px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              Me contacter
            </a>
          </div>

          <div className="animate-fade-up [animation-delay:360ms]">
            <Terminal />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs animate-fade-up [animation-delay:200ms] md:max-w-none">
          <div className="absolute -inset-6 -z-20 animate-pulse-slow rounded-full bg-teal/20 blur-2xl" aria-hidden="true" />
          <div className="absolute -inset-3 -z-10 border border-line/70" aria-hidden="true" />
          <div className="group relative aspect-[4/5] w-full overflow-hidden bg-surface">
            <Image
              src="/profile.jpg"
              alt="Portrait de Chayma Jlali"
              fill
              sizes="(min-width: 768px) 30vw, 60vw"
              className="object-cover grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}