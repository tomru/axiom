import webpack from 'webpack';

export function createAlias(alias, aliasPath) {
  return new webpack.NormalModuleReplacementPlugin(new RegExp(`^${alias}`), (result) => {
    result.request = result.request.replace(new RegExp(`^${alias}(.*)`), `${aliasPath}$1`);
  });
}
