# Projet 001 : mon CV avec React et Vite

Ce projet affiche mon CV dans le navigateur. Il est construit avec React et Vite, et il est divisé en trois composants : informations personnelles, compétences et expériences.

## Étapes réalisées

1. Se placer dans le dossier de cours puis créer le projet nommé 001 avec Vite :
   ```
   npm create vite@latest 001 -- --template react
   ```
   Choix faits pendant la création : linter **Oxlint**, installation automatique **No**.
2. Entrer dans le dossier du projet :
   ```
   cd 001
   ```
3. Installer les dépendances :
   ```
   npm install
   ```
4. Lancer le serveur de développement :
   ```
   npm run dev
   ```
5. Ouvrir http://localhost:5173/ dans le navigateur pour vérifier que la page Vite s'affiche.
6. Ouvrir le dossier 001 dans VS Code.
7. Créer le dossier `src/components/`.
8. Créer les trois composants dans ce dossier :
   - `InfoPerso.jsx` : photo, nom, titre, email, téléphone, adresse
   - `Competences.jsx` : liste des compétences
   - `Experiences.jsx` : liste des expériences
9. Ajouter ma photo `photo.jpg` dans le dossier `public/`.
10. Modifier `src/App.jsx` pour importer et afficher les trois composants.
11. Écrire les styles dans `src/App.css` et `src/index.css`.
12. Vérifier le résultat dans le navigateur.

## Rôle des dossiers et fichiers

### Dossiers

| Dossier | Rôle |
|---|---|
| `node_modules/` | Contient les librairies installées par `npm install` (React, Vite, etc.). Généré automatiquement, on ne le modifie pas. |
| `public/` | Fichiers statiques servis tels quels, comme ma photo `photo.jpg` et le favicon. |
| `src/` | Code source de l'application. C'est le dossier où je travaille. |
| `src/assets/` | Images et ressources importées dans le code. |
| `src/components/` | Mes composants React : `InfoPerso`, `Competences` et `Experiences`. |

### Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Unique page HTML du projet. Elle contient `<div id="root">`, l'endroit où React affiche l'application. |
| `src/main.jsx` | Point d'entrée JavaScript. Il prend le composant `App` et l'affiche dans `#root`. |
| `src/App.jsx` | Composant principal. Il regroupe les trois composants du CV. |
| `src/App.css` | Styles du CV (couleurs, bandeau, photo, pastilles). |
| `src/index.css` | Styles globaux de la page (fond, marges). |
| `package.json` | Carte d'identité du projet : nom, version, scripts (`dev`, `build`, `preview`) et liste des dépendances. |
| `package-lock.json` | Verrouille les versions exactes des librairies installées. |
| `vite.config.js` | Configuration de Vite. |
| `.oxlintrc.json` | Règles de vérification du code (linter Oxlint). |
| `.gitignore` | Liste des fichiers ignorés par Git, par exemple `node_modules`. |
| `README.md` | Ce fichier : documentation du projet. |

## Les trois composants

- **InfoPerso** : affiche mes informations personnelles dans le bandeau du haut.
- **Competences** : affiche mes compétences sous forme de liste de pastilles.
- **Experiences** : affiche mes expériences avec le poste, le lieu, la période et une description.

## Lancer le projet

```
npm install
npm run dev
```

Puis ouvrir http://localhost:5173/ dans le navigateur.

## Auteur

Oumou Kalsoum Wade