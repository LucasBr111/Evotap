import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { boundaries } from "./base.mjs";

export default [
  ...nextVitals,
  ...nextTypescript,
  { ignores: [".next/**", "next-env.d.ts"] },
  { rules: boundaries },
];
