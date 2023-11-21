import terser from "@rollup/plugin-terser";
import ts from "rollup-plugin-ts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { dts } from "rollup-plugin-dts";
import { defineConfig } from "rollup";

import pkg from "./package.json" assert { type: "json" };

export default defineConfig([
  {
    input: "build/index.ts",
    output: [
      {
        file: pkg.module,
        format: "es",
      },
    ],
    plugins: [terser(), peerDepsExternal(), ts()],
  },
  {
    input: "build/index.ts",
    output: {
      file: pkg.types,
      format: "es",
    },
    plugins: [dts()],
  },
]);
