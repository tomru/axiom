#!/bin/bash
set -e

npx lerna exec --parallel -- rm -rf dist
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* dist
npx lerna exec --parallel -- npx babel dist -d dist

npx lerna exec --parallel -- rm -rf esm
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* esm
npx lerna exec --parallel -- BABEL_ENV=static npx babel esm -d esm

