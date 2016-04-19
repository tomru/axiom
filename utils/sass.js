import nodeSass from 'node-sass';
import decamelize from 'decamelize';
import { parseQuery } from 'loader-utils';

function formatKey(key) {
  const decamelized = decamelize(key, '-');

  if (decamelized.includes('-')) {
    return decamelized;
  }

  return key;
}

function formatValue(value) {
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return `(${value.map((arrayValue) => {
        return `${formatValue(arrayValue)}`
      })})`;
    }

    return `(${Object.keys(value).map((key) => {
      return `${formatKey(key)}:${formatValue(value[key])}`;
    })})`
  }

  return JSON.stringify(value).replace(/"/g, '');
}

function clearCachedFiles(file) {
  if (file) {
    if (Array.isArray(file.children)) {
      file.children.forEach(clearCachedFiles);
    }

    delete require.cache[file.id];
  }
}

export function variableImporter(config, importName) {
  return function variableInjector(url) {
    if (url !== importName) {
      return nodeSass.NULL;
    }

    if (require.cache[config]) {
      clearCachedFiles(require.cache[config])
    }

    const jsVariables = require(config);
    const variableSass = Object.keys(jsVariables).reduce((acc, jsKey) => {
      const sassKey = `$${formatKey(jsKey)}`
      const sassValue = formatValue(jsVariables[jsKey]);

      return `${acc}\n${sassKey}: ${sassValue};`
        // TODO: Weird Sass issue with having only one element.
        .replace(/\)\)/g, '),)');
    }, '');

    return {
      contents: variableSass,
    };
  }
}
