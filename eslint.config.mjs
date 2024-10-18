/* eslint-env jest */

import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // Add Jest
      },
    },
  },
  pluginJs.configs.recommended,
];
