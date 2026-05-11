# Portfolio Showcase — React SPA

A modern, responsive *Single Page Application* built with React that enables a creative agency to showcase their work, dynamically add new projects, and let visitors search and filter through their portfolio seamlessly.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Component Tree](#component-tree)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Responsive Design](#responsive-design)
- [License](#license)

---

## Overview

This project was built as a *Summative Lab* for a creative agency that needed a clean, maintainable web presence to showcase past projects and dynamically update their portfolio as new work is completed. It provides a seamless browsing experience for potential clients and collaborators.

---

## Features

| Feature | Description |
| *Project Gallery* | Landing page displaying all portfolio projects in a responsive grid |
| *Add Projects* | Form to dynamically add new projects to the portfolio |
| *Live Search* | Real-time filtering of projects by title, category, or description |
|*Responsive Design* | Fully responsive layout optimised for mobile, tablet, and desktop |
| *SPA Navigation* | Smooth client-side routing with no full-page reloads |

---

## Tech Stack

- *Framework:* [React](https://react.dev/) (with Hooks)
- *Build Tool:* [Vite](https://vitejs.dev/) / Create React App
- *Routing:* [React Router DOM](https://reactrouter.com/)
- *Styling:* CSS Modules / Tailwind CSS / Material UI
- *State Management:* useState, useEffect (+ Context API if global state is needed)
- *Testing:* [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)

---

## Project Structure


portfolio-spa/
├── public/
│   └── index.html
├── src/
│   ├── assets/              # Images, icons, fonts
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectCard.module.css
│   │   ├── ProjectList/
│   │   │   ├── ProjectList.jsx
│   │   │   └── ProjectList.module.css
│   │   ├── AddProjectForm/
│   │   │   ├── AddProjectForm.jsx
│   │   │   └── AddProjectForm.module.css
│   │   └── SearchBar/
│   │       ├── SearchBar.jsx
│   │       └── SearchBar.module.css
│   ├── hooks/
│   │   └── useProjects.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── styles/
│   │   └── global.css
│   ├── tests/
│   │   ├── ProjectCard.test.jsx
│   │   ├── AddProjectForm.test.jsx
│   │   └── SearchBar.test.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md


---

## Component Tree


App
├── Navbar
└── Home (Page)
    ├── SearchBar          [search query → filters ProjectList]
    ├── AddProjectForm     [onAddProject → updates projects state]
    └── ProjectList        [receives filtered projects]
        └── ProjectCard[]  [receives individual project as prop]


### State & Props Flow

| State | Owned By | Passed To |
|---|---|---|
| projects | App or Home | ProjectList, AddProjectForm |
| searchQuery | Home | SearchBar, ProjectList |
| newProject (form fields) | AddProjectForm | local only |

---

##  Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

bash
# 1. Clone the repository
git clone https://github.com/your-username/portfolio-spa.git

# 2. Navigate into the project directory
cd portfolio-spa

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev


The app will be available at *http://localhost:5173* (Vite) or *http://localhost:3000* (CRA).

---

## Available Scripts

| Script | Description |
|---|---|
| npm run dev | Start the development server |
| npm run build | Build the app for production (Firebase build target) |
| npm run build:firebase | Build the app for Firebase Hosting |
| npm run build:gh-pages | Build the app for GitHub Pages with /portfolio-spa/ base path |
| npm run preview | Preview the production build locally |
| npm run deploy:firebase | Build and deploy to Firebase Hosting |
| npm run deploy:gh-pages | Build and deploy to GitHub Pages |
| npm test | Run all tests |
| npm run test -- --coverage | Run tests with coverage report |

---

## Testing

Tests are written using *Jest* and *React Testing Library*. They cover:

-  Rendering of ProjectCard with correct props
-  SearchBar filters the project list in real time
- AddProjectForm submits and adds a new project to the list
-  Empty state rendering when no projects match the search

bash
npm test
npm test -- --coverage


---

## Responsive Design

| Breakpoint | Layout |
|---|---|
| < 600px | Single column, stacked cards |
| 600px – 960px | Two-column grid |
| > 960px | Three or four-column grid |

---

## Contributing

1. Fork the repository
2. Create your feature branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -m 'Add your feature'
4. Push to the branch: git push origin feature/your-feature
5. Open a pull request

---

##  License

This project is licensed under the [MIT License](LICENSE).

---