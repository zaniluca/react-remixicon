import path from "path";

export default {
  icon: true,
  typescript: true,
  // For some reason having memo or ref enabled leads to non-tree-shakeable components
  // memo: true,
  // ref: true,
  index: true,
  outDir: "build",
  svgProps: {
    fill: "currentColor",
  },
  indexTemplate: (filePaths) => {
    const exportEntries = filePaths.map(({ path: filePath }) => {
      const basename = path.basename(filePath, path.extname(filePath));
      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      return `export { default as ${exportName}Icon } from './${basename}'`;
    });
    return exportEntries.join("\n");
  },
};
