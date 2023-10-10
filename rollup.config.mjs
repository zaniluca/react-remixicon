import multi from "@rollup/plugin-multi-entry";
import terser from "@rollup/plugin-terser";
import ts from "rollup-plugin-ts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "build/**/*.ts",
    output: [
      {
        file: pkg.module,
        format: "es",
      },
    ],
    plugins: [
      peerDepsExternal(),
      terser(), // Minifies generated bundles https://www.npmjs.com/package/rollup-plugin-terser
      multi({
        entryFileName: "index.js",
      }), // Allows multiple entry points https://www.npmjs.com/package/@rollup/plugin-multi-entry
      ts(), // Transpiles TypeScript https://www.npmjs.com/package/rollup-plugin-ts
    ],
    external: ["react"],
  },
];
