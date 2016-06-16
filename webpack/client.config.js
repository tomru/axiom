import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import * as config from '../config';
import { variableImporter } from '../utils/sass';

export default {
  target: 'web',
  context: __dirname,
  cache: false,
  debug: false,
  devtool: false,
  entry: config.entries.styleGuide.client,
  output: {
    path: config.output.path,
    filename: config.output.styleGuide.clientProdJSFilename,
  },
  resolve: {
    alias: {
      'bw-axiom': config.paths.axiom,
      'style-guide': config.paths.styleGuide,
    },
  },
  resolveLoader: {
    modulesDirectories: [
      'node_modules',
      'utils',
    ],
  },
  plugins: [
    ...config.webpack.aliases,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // TODO: Can't enable this until UglifyJS2 Harmony is released
    // https://github.com/mishoo/UglifyJS2/issues/448
    // new webpack.optimize.UglifyJsPlugin({
      // compress: {
        // keep_fnames: true,
        // keep_classnames: true,
        // warnings: false,
      // },
    // }),
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
    new ExtractTextPlugin(config.output.styleGuide.clientProdCSSFilename, {
      allChunks: true,
    }),
  ],
  module:  {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.yml$/,
      loader: 'json!yaml',
    }, {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract(
        'style',
        `css!postcss!sass`,
      ),
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
      exclude: /node_modules/,
    }, {
      test: /\.md$/,
      loaders: [
        'babel',
        'markdown-documentation',
      ],
    }],
  },
  sassLoader: {
    importer: variableImporter(config.paths.sassConfig, 'axiom-vars'),
  },
  postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
};
