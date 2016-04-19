import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as config from '../config';
import { variableImporter } from '../utils/sass';

export default {
  target: 'web',
  context: __dirname,
  cache: false,
  debug: false,
  devtool: false,
  entry: config.entries.documentation.client,
  output: {
    path: config.output.path,
    filename: config.output.documentation.clientProdJSFilename,
  },
  resolve: {
    alias: {
      axiom: config.paths.axiom,
      'documentation': config.paths.documentation,
      'sass-vars': config.paths.sassConfig,
    },
  },
  plugins: [
    ...config.webpack.aliases,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      ...config.webpack.globals,
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new ExtractTextPlugin(config.output.documentation.clientProdCSSFilename, {
      allChunks: true,
    }),
  ],
  module:  {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.yml$/,
      loader: 'json!yaml'
    }, {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract(
        'style',
        `css!autoprefixer!sass`,
      ),
      include: [
        config.paths.documentation,
        config.paths.axiom,
        config.paths.nodeModules,
      ],
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=fonts/font-awesome.[hash].[ext]',
      include: [
        config.nodeModules.fontAwesome,
      ],
    }],
    postLoaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [
        config.paths.documentation,
        config.paths.axiom,
      ],
    }],
  },
  sassLoader: {
    importer: variableImporter(config.paths.sassConfig, 'axiom-vars'),
  }
};
