import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["build/**/*.ts", "build/**/*.tsx"],
  format: ["cjs", "esm"],
  splitting: true,
  dts: true,
  minify: true,
});
