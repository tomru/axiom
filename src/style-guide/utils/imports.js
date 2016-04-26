const SASS_LOCATION = `${__PACKAGE_NAME__}/${__OUTPUT_DIR__}/sass`;
const JSX_LOCATION = `${__PACKAGE_NAME__}/${__OUTPUT_DIR__}/react`;

export function sassImports(sass = []) {
  return sass.reduce((acc, i) => {
    return `${acc}\n@import '${SASS_LOCATION}${i}';`;
  }, '');
}

export function jsxImports(components) {
  function extractComponents({children = [], Component}, extracted = []) {
    if (!extracted.includes(Component.name)) {
      extracted.push(Component.name);
    }

    children.forEach((child) => {
      extractComponents(child, extracted);
    });

    return extracted;
  }

  if (!components || !components.length) {
    return null;
  }

  const extractedComponents = []
  components.forEach((c) => extractComponents(c, extractedComponents));

  return `import { ${extractedComponents.join(', ')} } from '${JSX_LOCATION}';`;
}

export function getImportDocs(doc) {
  return {
    jsx: jsxImports(doc.components),
    sass: sassImports(doc.sass),
  };
}
