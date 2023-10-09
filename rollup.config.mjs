import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import multi from "@rollup/plugin-multi-entry";
import ts from "rollup-plugin-ts";

export default [
  {
    input: "build/**/*.ts",
    output: {
      format: "es",
      dir: "dist",
    },
    plugins: [
      multi({
        entryFileName: "index.js",
      }),
      resolve(),
      commonjs(),
      ts(),
    ],
    external: ["react", "react-dom"],
  },
];
