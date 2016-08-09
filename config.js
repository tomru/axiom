import path from 'path';
import Alias from './utils/webpack-alias-plugin';
import { name, version } from './package.json';

const outputFolderName = 'lib';

export const paths = {
  nodeModules: path.resolve(__dirname, 'node_modules'),
  output: path.resolve(__dirname, outputFolderName),
  source: path.resolve(__dirname, 'src'),
  static: path.resolve(__dirname, 'static'),
  styleGuide: path.resolve(__dirname, 'style-guide'),
};

paths.sassConfig = path.join(paths.styleGuide, 'style', 'index.js');
paths.sassVariables = path.join(paths.styleGuide, 'style', 'variables.js');

export const webpack = {
  devServerHostname: 'localhost',
  devServerPort: 8080,
  globals: {
    __PACKAGE_NAME__: `"${name}"`,
    __VERSION__: `"${version}"`,
    __OUTPUT_DIR__: `"${outputFolderName}"`,
  },
  aliases: [
    new Alias(/^bw-axiom/, (path) => path.replace(/^bw-axiom(.*)/, `${paths.source}$1`)),
    new Alias(/^style-guide/, (path) => path.replace(/^style-guide(.*)/, `${paths.styleGuide}$1`)),
  ],
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
  },
};
