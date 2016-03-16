import webpack from 'webpack';

/* eslint-disable no-param-reassign */
export function createAlias(alias, aliasPath) {
  return new webpack.NormalModuleReplacementPlugin(new RegExp(`^${alias}`), (result) => {
    result.request = result.request.replace(new RegExp(`^${alias}(.*)`), `${aliasPath}$1`);
  });
}
/* eslint-enable no-param-reassign */
