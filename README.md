<p align="center">
  <img alt="Simplon's Skills Farming" src="/conception/pictures/logo.png" />
</p>
<h1 align="center">
  Simplon's Skills Farming
</h1>

:point_right: You can find [last Figma's model here](https://www.figma.com/file/sxHkQE8ntzhyIBLPfE2IU5/skills-tree).

### :dart: Goal

> L'arbre de talent a pour but de centraliser tous les modules ainsi que toutes les compétences du référentiel CDA.
> Chaque apprenant doit pouvoir situer son niveau par rapport aux différentes compétences du référentiel et par rapport au niveau global de la promotion.

### 🌀 Get Up and Running in 5 Minutes

#### ⚡️ INSTALL

1. Clone repository
2. Copy database.dist.json to database.json, fill with correct values

#### 🚀 LAUNCH

1. If it's the first time that you're running this project, go to the _Application_ folder, at the root of the repository, with your terminal and run the following command: `npm install`

2. Go to the Application folder, at the root of the repository, with your terminal and run the following command: `npm run dev`.

_No needs to create the database on your mysql server, if it does'nt exists, it'll be created while runing the app_

### TODO-LIST

#### :closed_book: TODO

**[PREVIEW]**

- Charte graphique

**[BACK]**

- Développer des composants dans le langage d'une base de données, back-end, multi-couche, composant métier **:two:**
  - Node, Express, MySQL
- Préparer et exécuter les plans de tests d'une application **:two:**
  - utilisation de Postman
  - afficher les requêtets et les résultats des fonctionnalités énoncés dans le sujet

**[FRONT]**

- Développer une interface **:two:**
  - mise en place d'une architecture
  - bundler
  - mise en place des bonnes pratiques de conception
  - intégration des maquettes

#### :orange_book: DOING

- Maquetter une application **:two:**
  - utilisation de Figma
  - création de wireframes / maquettes
- Mettre en place une base de données **:two:**
  - utilisation du SGBD MySQL
  - utilisation d'un outil de gestion de base de données: PhpMyAdmin / Workbench

#### :green_book: DONE

- MCD [tool]
- MPD [tool]

---

### :scroll: ENTITIES

| FARMERS    | THEMES      | SKILLS      | LEVELS      | FARMERS_SKILLS_LEVELS | FARMERS_SKILLS_TIPS |
| ---------- | ----------- | ----------- | ----------- | --------------------- | ------------------- |
| ID         | ID          | ID          | ID          | ID                    | ID                  |
| EMAIL      | NAME        | NAME        | NAME        | FARMER_ID             | FARMER_ID           |
| FIRST_NAME | DESCRIPTION | DESCRIPTION | DESCRIPTION | SKILL_ID              | SKILL_ID            |
| LAST_NAME  |             | THEME_ID    |             | LEVEL_ID              | TIP_NAME            |
| PASSWORD   |             |             |             |                       | TIP_CONTENT         |

---

### :star2: TEAM

:email: cabanes.thibault@gmail.com

:email: lilian.mahut@pm.me

---

### UTILS

#### Background-Image:

![alt text](./assets/images/background.jpg)
_background-image source: https://unsplash.com/photos/2oYMwuFgnTg_
