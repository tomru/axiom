/* eslint-disable no-console */
import q from 'q';
import webpack from 'webpack';
import webpackConfig from '../webpack/server.development.config';

// Config for minimal console.log mess.
const statOptions = {
  assets: false,
  colors: true,
  version: false,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
};

export default function watchServer() {
  const deferred = q.defer();
  const compiler = webpack(webpackConfig);

  console.log('WEBACK -> Server: started...');

  compiler.watch({}, (error, stats) => {
    if (error) {
      console.log(error);
    }

    console.log(stats.toString(statOptions));
    console.log('WEBACK -> Server: complete');

    if (deferred.promise.state !== 'fulfilled') {
      deferred.resolve();
    }
  });

  return deferred.promise;
}
