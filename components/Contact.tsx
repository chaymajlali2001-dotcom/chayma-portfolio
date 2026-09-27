import { profile } from "@/data/cv";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="row-texture">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl italic text-ink sm:text-4xl">
            Discutons de votre prochain projet.
          </h2>
          <p className="mt-5 max-w-prose text-muted leading-relaxed">
            Disponible pour des missions de développement full-stack, en particulier sur des systèmes
            métier ou des intégrations IA.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring rounded text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-teal"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="focus-ring rounded text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-teal"
          >
            {profile.phone}
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-teal"
          >
            {profile.linkedin}
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-teal"
          >
            {profile.github}
          </a>
        </Reveal>
      </div>

      <footer className="border-t border-line/60 px-6 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}