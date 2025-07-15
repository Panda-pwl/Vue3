import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import jsonPlugin from "@eslint/json";
import cssPlugin from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: { js },
    extends: ["js/recommended"],
  },

  tseslint.configs.recommended,

  ...pluginVue.configs["flat/essential"].map(config => ({
    ...config,
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  })),

  {
    files: ["**/*.json"],
    ignores: ['**/package-lock.json','**/tsconfig.*.json'], // 👈 添加这一行
    plugins: { json: jsonPlugin },
    language: "json/json",
    extends: ["json/recommended"],
  },

  {
    files: ["**/*.css"],
    plugins: { css: cssPlugin },
    language: "css/css",
    extends: ["css/recommended"],
    rules: {
      "css/use-baseline": "off", // 关闭 outline 的兼容性警告
    },
  }
]);