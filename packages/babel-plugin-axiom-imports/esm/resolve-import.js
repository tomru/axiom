function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require('path');
var fs = require('fs');
var Module = require('module');

var _require = require('babylon'),
    parse = _require.parse;

var supportedAxiomPackages = ['@brandwatch/axiom-automation-testing', '@brandwatch/axiom-charts', '@brandwatch/axiom-components', '@brandwatch/axiom-composites', '@brandwatch/axiom-formatting', '@brandwatch/axiom-localization', '@brandwatch/axiom-materials', '@brandwatch/axiom-utils'];

var exportsList = supportedAxiomPackages.reduce(function (memo, packageName) {
  var importList = {};
  var exportList = void 0;

  try {
    exportList = fs.readFileSync(path.join(path.dirname(Module._resolveFilename(packageName, Object.assign({}, new Module(), {
      'paths': Module._nodeModulePaths(process.cwd())
    }))), '../src/index.js'), 'utf8');
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
  }

  if (exportList) {
    memo[packageName] = {};
    parse(exportList, { sourceType: 'module' }).program.body.forEach(function (node) {
      node.specifiers.forEach(function (spec) {
        switch (spec.type) {
          case 'ImportNamespaceSpecifier':
            return importList[spec.local.name] = node.source.value;
          case 'ExportSpecifier':
            if (spec.local.name === spec.exported.name && importList[spec.local.name]) {
              memo[packageName][spec.local.name] = [path.join(packageName + '/dist', importList[spec.local.name]), '*'];
            } else {
              memo[packageName][spec.exported.name] = [path.join(packageName + '/dist', node.source.value), 'default'];
            }
        }
      });
    });
  }

  return memo;
}, {});

module.exports = function (pkg, name) {
  if (exportsList[pkg] && exportsList[pkg][name]) {
    return exportsList[pkg][name];
  }

  throw new Error('Axiom export: ' + name + ' was not found.');
};

module.exports.packages = supportedAxiomPackages.reduce(function (packages, pkg) {
  return Object.assign({}, packages, _defineProperty({}, pkg, true));
}, {});