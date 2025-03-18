import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import plugin from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  { plugins: { plugin, prettier } },
  {
    rules: {
      ...prettierConfig.rules,
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
    },
  },
  { settings: { react: { version: "detect" } } },
];
