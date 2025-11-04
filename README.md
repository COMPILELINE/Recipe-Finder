# Recipe Finder

A clean and modular **AngularJS (v1.8)** single-page app for exploring recipes, viewing detailed instructions, and saving your favorites. Built to practice SPA architecture, component-based patterns, and persistent local storage in a classic AngularJS environment.

---

## ✨ Features

- **Recipe Search** Search by dish name or ingredient using TheMealDB API
- **Detailed Recipe View** Ingredients, measurements, instructions and preview image
- **Favorites System** Save recipes locally via `localStorage`
- **Hash-Based Routing** `/` `#/search/:query` `#/recipe/:id` `#/favorites`
- **Mobile-First UI** Works across phones, tablets, desktop
- **Loading & Error States** Clear UX for slow networks and API errors

---

## 🛠 Tech Stack

| Category | Tech |
|---|---|
| Framework | AngularJS 1.8.2 |
| Routing | ngRoute |
| Styling | Custom CSS (Mobile-First) |
| API | [TheMealDB](https://www.themealdb.com/api.php) |

---

## 🏗 Architecture

This project follows a **modular + component driven** AngularJS 1.5+ approach.

| File/Folder | Type | Description |
|---|---|---|
| `app/core/api.service.js` | Service | Handles `$http` calls, cleans API fields like `strIngredient1`, `strMeasure1` |
| `app/core/storage.service.js` | Service | Saves, retrieves, and removes favorites via `localStorage` |
| `app/components/` | Components | UI building blocks (recipeCard, searchBar, etc.) using `bindings` |
| `app/views/` | Controllers + templates | Route-level controllers for search, details, favorites |
| `app/app.config.js` | Routing | Defines routes and templates via `ngRoute` |

---

## 🚀 Getting Started

### ✅ Prerequisite
Run behind a **local server** (API + browser security rules)

Recommended options:

- VS Code extension: **Live Server**
- Python simple server:
  ```bash
  python3 -m http.server
- Installation
  ```
  git clone https://github.com/COMPILELINE/Recipe-Finder.git
  cd recipe-finder
- Navigate to
  ```
  http://localhost:8000/index.html
  ```
  (or your server's equivalent) in your browser.
