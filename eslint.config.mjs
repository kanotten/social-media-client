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
];
