/* eslint-disable no-console */
import q from 'q';
import webpack from 'webpack';
import webpackConfig from '../webpack/server.config';

export default function buildClient() {
  const compiler = webpack(webpackConfig);
  const deferred = q.defer();

  console.log('WEBACK -> Server: started...');

  compiler.run((error, stats) => {
    if (error) {
      console.log(error);
    }

    console.log(stats.toString({
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    }));

    console.log('WEBACK -> Server: complete');

    deferred.resolve();
  });

  return deferred.promise;
}
