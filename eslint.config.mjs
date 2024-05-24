import globals from "globals";
import pluginJs from "@eslint/eslint-plugin";
import pluginReactConfig from "eslint-plugin-react";

export default {
  overrides: [
    {
      files: ["*.js"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
      plugins: ["@eslint/eslint-plugin"],
      extends: ["plugin:@eslint/eslint-plugin/recommended"],
    },
    {
      files: ["*.jsx"],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ["react"],
      extends: ["plugin:react/recommended"],
    },
  ],
};
