# SocialFlow

[![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-informational?logo=react&logoColor=61DAFB)]()
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=nextdotjs&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)]()


SocialFlow is a platform designed to streamline social media scheduling and auto-posting across multiple platforms. It leverages React, TypeScript, Next.js, and Tailwind CSS to provide a user-friendly and efficient experience for content creators.

## 📌 Table of Contents

- [✨ Features](#-features)
- [💻 Tech Stack](#-tech-stack)
- [🛠️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [How to use](#how-to-use)
- [🏗️ Project Structure](#️-project-structure)
- [⚙️ Configuration](#️-configuration)
- [📄 Configuration Files](#-configuration-files)
- [📄 Summary Table](#-summary-table)
- [🔗 Important Links](#-important-links)
- [🤝 Contributing](#-contributing)
- [⭐ Show Your Support](#-show-your-support)


## ✨ Features

- **Smart Scheduling:** AI-powered optimal posting times based on audience activity patterns.
- **Multi-Platform Posting:** Automatic content adaptation for various social media platforms.
- **Advanced Analytics:** Detailed insights into engagement, reach, and growth.
- **Team Collaboration:** Approval workflows and role-based permissions for seamless teamwork.
- **Animations and UI Elements**: Rich UI/UX features with Particles, Icons, and Framer Motion.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## 💻 Tech Stack

- **Language:** TypeScript
- **Framework:** React, Next.js
- **Styling:** Tailwind CSS
- **Bundler:** Vite
- **Linting:** ESLint
- **UI Libraries:** @radix-ui/react-slot, lucide-react, react-icons
- **Animations:** framer-motion
- **Particles:** tsparticles

## 🛠️ Installation

1.  **Clone the repository:**

   ```bash
   git clone https://github.com/Adityaphophale/SocialFlow.git
   cd SocialFlow
   ```

2.  **Install dependencies:**

   ```bash
   npm install # or yarn install or pnpm install or bun install
   ```

## 🚀 Usage

1.  **Start the development server:**

   ```bash
   npm run dev
   ```

   This command starts the Vite development server, and you can view the application in your browser.

2.  **Lint your code:**

   ```bash
   npm run lint
   ```

   This command runs ESLint to check for code quality and style issues.

3.  **Build for production:**

   ```bash
   npm run build
   ```

   This command builds the application for production.

4.  **Preview the production build:**

   ```bash
   npm run preview
   ```

   This command previews the production build locally.

## How to use

SocialFlow helps you schedule and auto-post to social media. To use it:

1.  **Install the dependencies** using `npm install` or `yarn install` or `pnpm install` or `bun install`.
2.  **Start the development server** using `npm run dev`.
3.  **Navigate to the app** in your browser.
4.  **Explore the features**, such as smart scheduling and multi-platform posting.
5.  **Customize the application** by modifying the components in the `src` directory.

## 🏗️ Project Structure

```
SocialFlow/
├── .bolt/                       # Bolt configuration
├── .eslintrc.cjs               # ESLint configuration
├── .gitignore                   # Specifies intentionally untracked files that Git should ignore
├── index.html                  # Main HTML entry point
├── package.json                 # Project dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── README.md                   # Project documentation
├── src/                       # Source code directory
│   ├── App.tsx                # Main application component
│   ├── index.css                # Global styles
│   ├── main.tsx               # Entry point for React application
│   ├── vite-env.d.ts            # Vite environment declaration
│   ├── lib/                   # Utility functions
│   │   └── utils.ts             # Utility functions like cn (classnames)
│   ├── components/              # React components
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── *              # Various UI components
│   │   ├── sections/          # Website sections
│   │   │   ├── *              # Various website sections
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── tsconfig.app.json          # TypeScript configuration for app
├── tsconfig.node.json         # TypeScript configuration for Node
├── vite.config.ts             # Vite configuration
└── yarn.lock                  # Records the versions of dependencies used in the project
```

## ⚙️ Configuration

### tailwind.config.js

This file configures Tailwind CSS for the project, including custom themes, animations, and plugins.

```javascript
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        sparkle: 'sparkle 2s ease-in-out infinite',
        aurora: "aurora 60s linear infinite",
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
```

### eslint.config.js

This file configures ESLint for the project, ensuring code quality and style consistency.

```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
```

### vite.config.ts

This file configures the Vite build tool for the project, including plugins, aliases, and dependency optimization.

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

## 📄 Configuration Files

| File                  | Purpose                                                                                      |
|-----------------------|----------------------------------------------------------------------------------------------|
| `.gitignore`            | Ignore files/folders for Git                                                                 |
| `postcss.config.js`     | CSS transforms – Tailwind, autoprefixer                                                      |
| `tailwind.config.js`    | Tailwind CSS customization – content, theme, plugins                                         |
| `eslint.config.js`      | ESLint rules for TS/React, hooks, and more                                                   |
| `index.html`            | Main HTML entry point, loads React app                                                       |
| `tsconfig.json`         | TypeScript project referencing                                                               |
| `tsconfig.node.json`    | TS settings for Vite/Node config files                                                       |
| `tsconfig.app.json`     | TS settings for app code, strictness, JSX, alias                                             |
| `package.json`          | Project meta, dependencies, scripts                                                          |
| `vite.config.ts`        | Vite build/dev settings, React plugin, path alias, dependencies optimization                  |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## 🔗 Important Links

-   **Repository:** [https://github.com/Adityaphophale/SocialFlow](https://github.com/Adityaphophale/SocialFlow)

## ⭐ Show Your Support

If you find this project helpful, please consider:

-   ⭐ Starring the repository on GitHub.
-   📢 Sharing the project with others in your network.
-   🙏 Supporting the author by contributing or providing feedback.
