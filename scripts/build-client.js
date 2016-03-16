/* eslint-disable no-console */
import q from 'q';
import webpack from 'webpack';
import webpackConfig from '../webpack/client.config';

export default function buildClient() {
  const compiler = webpack(webpackConfig);
  const deferred = q.defer();

  console.log('WEBACK -> Client: started...');

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

    console.log('WEBACK -> Client: completed');

    deferred.resolve();
  });

  return deferred.promise;
}
