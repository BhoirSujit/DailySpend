import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // TypeScript and general JS/TS rules go here
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
      // Add other rule customizations as needed
    },
  },
  
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
