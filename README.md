# Likelemba - Landing Page

## À propos du projet

Likelemba est une application mobile qui révolutionne la gestion des tontines en République Démocratique du Congo. Cette landing page présente l'application, ses fonctionnalités et ses avantages aux utilisateurs potentiels.

Une tontine est un système d'épargne solidaire où un groupe de personnes cotise régulièrement, et chaque membre reçoit à tour de rôle la totalité des cotisations collectées.

## Technologies utilisées

- **React** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **TypeScript** - Superset de JavaScript avec typage statique
- **Vite** - Outil de build rapide pour le développement web moderne
- **Tailwind CSS** - Framework CSS utilitaire pour un design personnalisé
- **Lucide React** - Bibliothèque d'icônes pour React

## Fonctionnalités présentées

- Création et gestion de groupes de tontine
- Paiements via Mobile Money (Airtel Money, M-Pesa, Orange Money)
- Suivi en temps réel des cotisations
- Notifications automatiques
- Support multilingue (Français, Lingala, Swahili)
- Sécurité renforcée (Authentification OTP, données chiffrées)

## Structure du projet

```plaintext
├── public/             # Fichiers statiques
├── src/                # Code source
│   ├── components/     # Composants React
│   │   ├── About.tsx   # Section À propos
│   │   ├── CTA.tsx     # Section d'appel à l'action
│   │   ├── FAQ.tsx     # Section FAQ
│   │   ├── Features.tsx # Section Fonctionnalités
│   │   ├── Footer.tsx  # Pied de page
│   │   ├── Header.tsx  # En-tête
│   │   ├── Hero.tsx    # Section principale
│   │   ├── Security.tsx # Section Sécurité
│   │   └── Testimonials.tsx # Section Témoignages
│   ├── App.tsx         # Composant principal
│   ├── index.css       # Styles globaux
│   └── main.tsx        # Point d'entrée
├── index.html          # Template HTML
├── package.json        # Dépendances et scripts
├── tailwind.config.js  # Configuration Tailwind CSS
├── tsconfig.json       # Configuration TypeScript
└── vite.config.ts      # Configuration Vite
```

## Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt

   ```bash
   git clone [url-du-repo]
   cd likelemba-landing-page
   ```

2. Installez les dépendances

   ```bash
   npm install
   # ou
   yarn
   ```

## Scripts disponibles

- **Développement** : Démarre le serveur de développement

  ```bash
  npm run dev
  # ou
  yarn dev
  ```

- **Build** : Compile le projet pour la production

  ```bash
  npm run build
  # ou
  yarn build
  ```

- **Preview** : Prévisualise la version de production localement

  ```bash
  npm run preview
  # ou
  yarn preview
  ```

- **Lint** : Vérifie le code avec ESLint

  ```bash
  npm run lint
  # ou
  yarn lint
  ```

## Personnalisation

Le projet utilise Tailwind CSS pour le styling. Vous pouvez personnaliser l'apparence en modifiant le fichier `tailwind.config.js` et les classes CSS dans les composants.

## Déploiement

Après avoir exécuté la commande de build, les fichiers générés se trouvent dans le dossier `dist` et peuvent être déployés sur n'importe quel hébergeur statique comme Netlify, Vercel, GitHub Pages, etc.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT.
