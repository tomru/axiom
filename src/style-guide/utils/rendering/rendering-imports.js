import { extractComponents } from './extracting';

function importLocation(...locations) {
  return locations.reduce((path, location) => {
    return `${path}/${location}`;
  }, `${__PACKAGE_NAME__}/${__OUTPUT_DIR__}`);
}

function buildJsImport(imports, location) {
  return `import { ${imports.join(', ')} } from '${importLocation(location)}';`;
}

function sassImports({imports: {sass = []} = {}}) {
  return sass.reduce((acc, i) => {
    return `${acc}\n@import '${importLocation(__OTUPUT_FOLDER_SASS__, i)}';`;
  }, '');
}

function jsxImports(doc) {
  const extractedComponents = extractComponents(doc);

  if (extractedComponents.length) {
    return buildJsImport(
      extractedComponents.map(({__ax_displayName}) => __ax_displayName),
      __OUTPUT_FOLDER_REACT__,
    );
  }

  return '';
}

function jsImports({imports: {js = []} = {}}) {
  if (js.length) {
    return buildJsImport(js, __OUTPUT_FOLDER_COMMON__);
  }

  return '';
}

export function renderImports(doc) {
  return {
    js: jsImports(doc),
    jsx: jsxImports(doc),
    sass: sassImports(doc),
  };
}
