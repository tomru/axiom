import path from 'path';
import { createAlias } from './lib/webpack-utils';
import { version } from './package.json';

const outputFolderName = 'dist';

export const paths = {
  libs: path.resolve(__dirname, 'lib'),
  nodeModules: path.resolve(__dirname, 'node_modules'),
  output: path.resolve(__dirname, outputFolderName),
  source: path.resolve(__dirname, 'src'),
  static: path.resolve(__dirname, 'static'),
};

paths.axiom = path.join(paths.source, 'axiom');
paths.axiomSass = path.join(paths.axiom, 'sass');
paths.axiomReact = path.join(paths.axiom, 'react');

paths.documentation = path.join(paths.source, 'documentation');
paths.sassConfig = path.join(paths.documentation, 'style', 'index.js');

export const webpack = {
  devServerHostname: 'localhost',
  devServerPort: 8080,
  globals: {
    __VERSION__: `"${version}"`,
  },
  aliases: [
    createAlias('axiom', paths.axiom),
    createAlias('documentation', paths.documentation),
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
  documentation: {
    clientDevJSFilename: 'documentation.client.js',
    clientProdJSFilename: 'documentation.client.min.js',
    clientProdCSSFilename: 'documentation.client.min.css',
    serverDevJSFilename: 'documentation.server.js',
    serverProdJSFilename: 'documentation.server.js',
  },
};

export const entries = {
  documentation: {
    client: path.join(paths.documentation, 'client.js'),
    server: path.join(paths.documentation, 'server.js'),
  }
};
