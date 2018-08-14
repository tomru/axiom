function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var resolveImport = require('./resolve-import');

module.exports = function (_ref) {
  var types = _ref.types;

  var specified = void 0;
  var selectedAxioms = void 0;

  var importAxiom = function importAxiom(_ref2, file) {
    var pkg = _ref2.pkg,
        name = _ref2.name;

    if (!selectedAxioms[name]) {
      selectedAxioms[name] = file.addImport.apply(file, _toConsumableArray(resolveImport(pkg, name)));
    }

    return types.clone(selectedAxioms[name]);
  };

  var isSpecialTypes = function isSpecialTypes(node) {
    return types.isMemberExpression(node) || types.isProperty(node) || types.isVariableDeclarator(node);
  };

  var hasBindingOfType = function hasBindingOfType(scope, name, type) {
    return scope.hasBinding(name) && scope.getBinding(name).path.type === type;
  };

  var matchesAxiomExport = function matchesAxiomExport(path, name) {
    return specified[name] && hasBindingOfType(path.scope, name, 'ImportSpecifier');
  };

  return {
    visitor: {
      Program: {
        enter: function enter() {
          specified = Object.create(null);
          selectedAxioms = Object.create(null);
        }
      },

      ImportDeclaration: function ImportDeclaration(path) {
        if (resolveImport.packages[path.node.source.value]) {
          var remove = void 0;

          path.node.specifiers.forEach(function (spec) {
            if (types.isImportSpecifier(spec)) {
              remove = true;
              specified[spec.local.name] = {
                pkg: path.node.source.value,
                name: spec.imported.name
              };
            }
          });

          if (remove) {
            path.remove();
          }
        }
      },
      CallExpression: function CallExpression(path) {
        if (!types.isIdentifier(path.node.callee)) return;

        if (matchesAxiomExport(path, path.node.callee.name)) {
          path.node.callee = importAxiom(specified[path.node.callee.name], path.hub.file);
        }

        if (path.node.arguments) {
          path.node.arguments = path.node.arguments.map(function (argument) {
            return matchesAxiomExport(path, path.node.callee.name) ? importAxiom(specified[path.node.callee.name], path.hub.file) : argument;
          });
        }
      },
      MemberExpression: function MemberExpression(path) {
        if (matchesAxiomExport(path, path.node.object.name)) {
          var _importAxiom = importAxiom(specified[path.node.object.name], path.hub.file),
              type = _importAxiom.type,
              name = _importAxiom.name;

          path.replaceWith(types.memberExpression({ type: type, name: name }, types.identifier(path.node.property.name)));
        }
      },
      Property: function Property(path) {
        if (types.isIdentifier(path.node.key) && path.node.computed && matchesAxiomExport(path, path.node.key.name)) {
          path.node.key = importAxiom(specified[path.node.key.name], path.hub.file);
        }

        if (types.isIdentifier(path.node.value) && matchesAxiomExport(path, path.node.value.name)) {
          path.node.value = importAxiom(specified[path.node.value.name], path.hub.file);
        }
      },
      Identifier: function Identifier(path) {
        if (matchesAxiomExport(path, path.node.name) && !isSpecialTypes(path.parent)) {
          var _importAxiom2 = importAxiom(specified[path.node.name], path.hub.file),
              type = _importAxiom2.type,
              name = _importAxiom2.name;

          path.replaceWith({ type: type, name: name });
        }
      }
    }
  };
};