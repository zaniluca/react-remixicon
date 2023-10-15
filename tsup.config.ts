import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["build/**/*.ts", "build/**/*.tsx"],
  format: ["esm"],
  splitting: true,
  dts: true,
  minify: true,
  treeshake: true,
  outExtension({ format }) {
    // Remove the .d.mts extension because it's not working
    return {
      dts: `.${format}.d.ts`,
    };
  },
});
