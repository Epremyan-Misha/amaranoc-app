export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // React import-ը չի պետք է eslint unused-vars զգուշացնի
      "no-unused-vars": ["warn", { varsIgnorePattern: "^React$" }],
    },
  },
]);
