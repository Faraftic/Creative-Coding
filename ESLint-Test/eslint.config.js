import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    extends: ["eslint:recommended", "plugin"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
