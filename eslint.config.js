import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

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
    // Add these rules
    rules: {
      // Disallow undefined variables
      "no-undef": "error",

      // Disallow console statements
      "no-console": "error",

      // Disallow explicit 'any' type
      "@typescript-eslint/no-explicit-any": "error",
      "react-refresh/only-export-components": "off",
      // Optional: Disallow implicit 'any'
      // "@typescript-eslint/no-unsafe-argument": "error",
      // "@typescript-eslint/no-unsafe-assignment": "error",
      // "@typescript-eslint/no-unsafe-call": "error",
      // "@typescript-eslint/no-unsafe-member-access": "error",
      // "@typescript-eslint/no-unsafe-return": "error",

      // Optional: Force explicit return types
      // "@typescript-eslint/explicit-function-return-type": [
      //   "error",
      //   { allowExpressions: true },
      // ],

      // Optional: Require type annotations
      // "@typescript-eslint/typedef": [
      //   "error",
      //   {
      //     arrowParameter: true,
      //     variableDeclaration: true,
      //   },
      // ],
    },
  },
]);
