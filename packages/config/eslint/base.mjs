import js from "@eslint/js";
import tseslint from "typescript-eslint";

export const boundaries = {
  "no-restricted-imports": [
    "error",
    {
      patterns: [
        {
          group: [
            "@evotap/database",
            "@evotap/database/*",
            "@prisma/client",
            "@prisma/client/*",
            "prisma",
          ],
          message:
            "Persistence belongs in server domain services and database repositories.",
        },
        {
          group: ["@evotap/*/src/*", "**/packages/*/src/**"],
          message: "Use workspace package exports.",
        },
      ],
    },
  ],
};

export default [
  { ignores: ["**/dist/**", "**/.next/**", "**/node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];
