# Clean up
yarn rimraf ./build ./dist

# Generate react components from svg icons
yarn svgr --config-file=./svgr.config.js ./node_modules/remixicon/icons

# Build index file
node ./scripts/buildIndex.mjs

# Build typescript files
yarn tsc

# Transpile javascript files
yarn babel ./dist --out-dir ./dist --copy-files --ignore '**/*.d.ts'


