// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig({
  files: ["**/*.{js,ts}"],
  languageOptions: {
    globals: globals.node,
  },
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
  ],
});
