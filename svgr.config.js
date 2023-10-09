const path = require("path");

module.exports = {
  icon: true,
  typescript: true,
  memo: true,
  index: true,
  outDir: "build",
  indexTemplate: (filePaths) => {
    const exportEntries = filePaths.map(({ path: filePath }) => {
      const basename = path.basename(filePath, path.extname(filePath));
      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      return `export { default as ${exportName} } from './${basename}'`;
    });
    return exportEntries.join("\n");
  },
};
