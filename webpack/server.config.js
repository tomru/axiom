import webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';
import * as config from '../config';

export default {
  target: 'node',
  context: __dirname,
  cache: false,
  debug: false,
  devtool: 'source-map',
  entry: [
    config.entries.documentation.server,
  ],
  output: {
    path: config.output.path,
    filename: config.output.documentation.serverDevJSFilename,
  },
  plugins: [
    ...config.webpack.aliases,
    new webpack.DefinePlugin({
      ...config.webpack.globals,
      __CLIENT__: false,
      __SERVER__: true,
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
  externals: [webpackNodeExternals()],
  resolve: {
    alias: {
      'sass-vars': config.paths.sassConfig,
    },
  },
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.yml$/,
      loader: 'json!yaml'
    }],
    postLoaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }],
  }
};
