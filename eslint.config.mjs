import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.cypress, // Add Cypress globals
      },
    },
  },
  pluginJs.configs.recommended,
  {
    files: ["**/*.cy.js"],
    languageOptions: {
      globals: {
        ...globals.cypress,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: ["cypress"],
    rules: {
      "cypress/no-unnecessary-waiting": "off",
      "no-unused-vars": "off",
    },
  },
];
