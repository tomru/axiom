import webpack from 'webpack';
import webpackConfig from './client.config';
import * as config from '../config';

export default {
  ...webpackConfig,
  cache: true,
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://${config.webpack.devServerHostname}:${config.webpack.devServerPort}`,
    'webpack/hot/only-dev-server',
    config.entries.styleGuide.client,
  ],
  output: {
    ...webpackConfig.output,
    filename: config.output.styleGuide.clientDevJSFilename,
    chunkFilename: '[name].[id].js',
    publicPath: `http://${config.webpack.devServerHostname}:${config.webpack.devServerPort}/${config.output.folderName}/`,
    hotUpdateMainFilename: 'update/[hash]/update.json',
    hotUpdateChunkFilename: 'update/[hash]/[id].update.js',
  },
  plugins: [
    ...config.webpack.aliases,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      ...config.webpack.globals,
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: false,
      __DEVELOPMENT__: true
    }),
  ],
  module: {
    ...webpackConfig.module,
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.yml$/,
      loader: 'json!yaml'
    }, {
      test: /\.(scss|css)$/,
      loaders: [
        'style',
        'css',
        'autoprefixer',
        'sass',
      ],
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      include: [
        config.nodeModules.fontAwesome,
      ],
    }],
  },
};
