# Portfolio — Chayma Jlali

Site portfolio construit avec Next.js 14 (App Router), TypeScript et Tailwind CSS.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — assemble les sections de la page.
- `components/` — une section = un composant (Hero, Experience, Skills…).
- `data/cv.ts` — tout le contenu texte (expériences, compétences, formation…). Modifiez ce fichier pour mettre le site à jour, sans toucher aux composants.
- `public/profile.jpg` — votre photo de profil, utilisée dans le Hero.

## Déploiement

Le moyen le plus simple est [Vercel](https://vercel.com) :

```bash
npm install -g vercel
vercel
```

Vous pouvez aussi builder pour n'importe quel hébergeur Node :

```bash
npm run build
npm run start
```

## Personnaliser

- **Couleurs / polices** : `tailwind.config.ts` (palette `teal`/`clay` sur fond sombre) et `app/layout.tsx` (polices Fraunces, Inter, IBM Plex Mono).
- **Contenu** : `data/cv.ts`.
- **Ajouter un projet perso avec lien** : étendez `academicProjects` dans `data/cv.ts`, ou dupliquez `components/Projects.tsx` pour une section dédiée avec liens GitHub/démo.
