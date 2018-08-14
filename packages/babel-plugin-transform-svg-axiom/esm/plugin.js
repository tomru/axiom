var _require = require('path'),
    extname = _require.extname,
    dirname = _require.dirname;

var _require2 = require('fs'),
    readFileSync = _require2.readFileSync;

var resolveFrom = require('resolve-from');
var SVGO = require('svgo');
var svgo = new SVGO({
  plugins: [{ removeAttrs: ['id'] }, { removeComments: true }, { removeDefs: true }, { removeDesc: true }, { removeDoctype: true }, { removeDimensions: false }, { removeTitle: true }]
});

/**
 * Credit to Shopify Polaris for the approach.
 * https://github.com/Shopify/polaris/blob/master/config/rollup/plugins/icon.js
 */
var VIEWBOX_REGEX = /viewBox="([^"]*)"/;
var SVG_REGEX = /(<svg[^>]*>|<\/svg>)/g;
var COLOR_REGEX = /(fill|stroke)="([^"]*)"/g;

module.exports = function () {
  return {
    visitor: {
      CallExpression: function CallExpression(path, state) {
        var callee = path.get('callee');

        if (callee.isIdentifier() && callee.equals('name', 'require')) {
          var arg = path.get('arguments')[0];
          var requirePath = arg.node.value;

          if (arg && arg.isStringLiteral() && extname(requirePath) === '.svg') {
            var filePath = state.file.opts.filename;
            var svgPath = resolveFrom(dirname(filePath), requirePath);
            var svgData = void 0;

            svgo.optimize(readFileSync(svgPath, 'utf8'), function (result) {
              var viewBox = VIEWBOX_REGEX.exec(result.data)[1];
              var _result$info = result.info,
                  height = _result$info.height,
                  width = _result$info.width;

              var finalSource = result.data.replace(COLOR_REGEX, function (m, prop, value) {
                if (value === 'none') return prop + '="none"';
                if (value.includes('#000')) return prop + '="currentColor"';
                return prop + '="' + value + '"';
              });

              svgData = {
                body: finalSource.replace(SVG_REGEX, ''),
                height: height,
                viewBox: viewBox,
                width: width
              };
            });

            path.replaceWithSourceString(JSON.stringify(svgData));
          }
        }
      }
    }
  };
};