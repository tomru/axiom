import path from 'path';
import { createAlias } from './utils/webpack';
import { name, version } from './package.json';

const outputFolderName = 'lib';

export const paths = {
  nodeModules: path.resolve(__dirname, 'node_modules'),
  output: path.resolve(__dirname, outputFolderName),
  source: path.resolve(__dirname, 'src'),
  static: path.resolve(__dirname, 'static'),
};

paths.axiom = path.join(paths.source, 'axiom');
paths.axiomSass = path.join(paths.axiom, 'sass');
paths.axiomReact = path.join(paths.axiom, 'react');

paths.styleGuide = path.join(paths.source, 'style-guide');
paths.sassConfig = path.join(paths.styleGuide, 'style', 'index.js');

export const webpack = {
  devServerHostname: 'localhost',
  devServerPort: 8080,
  globals: {
    __PACKAGE_NAME__: `"${name}"`,
    __VERSION__: `"${version}"`,
    __OUTPUT_DIR__: `"${outputFolderName}"`,
  },
  aliases: [
    createAlias('axiom', paths.axiom),
    createAlias('style-guide', paths.styleGuide),
  ]
};

export const server = {
  hostname: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || 4000,
};

export const nodeModules = {
  fontAwesome: path.join(paths.nodeModules, 'font-awesome'),
};

export const output = {
  folderName: outputFolderName,
  path: paths.output,
  styleGuide: {
    clientDevJSFilename: 'style-guide.client.js',
    clientProdJSFilename: 'style-guide.client.min.js',
    clientProdCSSFilename: 'style-guide.client.min.css',
    serverDevJSFilename: 'style-guide.server.js',
    serverProdJSFilename: 'style-guide.server.js',
  },
};

export const entries = {
  styleGuide: {
    client: path.join(paths.styleGuide, 'client.js'),
    server: path.join(paths.styleGuide, 'server.js'),
  }
};
