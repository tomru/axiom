import { getModuleComponents } from './docs-examples';

const SASS_LOCATION = `${__PACKAGE_NAME__}/${__OUTPUT_DIR__}/sass`;
const JSX_LOCATION = `${__PACKAGE_NAME__}/${__OUTPUT_DIR__}/react`;

export function sassImports(sass = []) {
  return sass.reduce((acc, i) => {
    return `${acc}\n@import '${SASS_LOCATION}${i}';`;
  }, '');
}

export function jsxImports(components) {
  return `import { ${
    getModuleComponents(components)
      .map((component) => component.__ax_displayName)
      .join(', ')
  } } from '${JSX_LOCATION}';`;
}

export function getImportDocs(doc) {
  return {
    jsx: jsxImports(doc.components),
    sass: sassImports(doc.sass),
  };
}
