import * as fs from "fs";
import * as path from "path";

const buildDir = "./build";

fs.readdir(buildDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const indexFile = path.join(buildDir, "index.ts");
  let exportStatements = "";

  files.forEach((file) => {
    const filePath = path.join(buildDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      exportStatements += `export * from './${file}';\n`;
    }
  });

  fs.writeFile(indexFile, exportStatements, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Successfully created ${indexFile}`);
  });
});
