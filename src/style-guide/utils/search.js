import Fuse from 'fuse.js';
import { versions } from 'docs';
import { findDocById, flattenStructure } from 'style-guide/utils/navigation';

function extractReducer(acc, example) {
  const extractedText = extractText(example);

  if (extractedText) {
    return `${acc} ${extractedText}`;
  }

  return acc;
}

function extractText(example) {
  if (typeof example === 'string') {
    return example;
  }

  let exampleText = `${example.title || ''}`;

  if (Array.isArray(example.children)) {
    exampleText = example.children.reduce(extractReducer, exampleText);
  }

  return exampleText || '';
}

function extractExamples(examples) {
  if (!examples || typeof examples !== 'function') {
    return '';
  }

  return examples({}, {}).reduce(extractReducer, '');
}

function buildFuse(routes) {
  return new Fuse(routes, {
    keys: ['path', 'group', 'imports', 'text'],
    threshold: 0.0,
    tokenize: true,
  });
}

export function searchRoutesForText(text, version = 'current') {
  const routes = Object.keys(versions[version]).reduce((acc, key) => {
    const {path, group, imports, examples, searchable = true} = versions[version][key];

    if (searchable) {
      acc.push({
        path,
        group,
        imports,
        text: extractExamples(examples),
      });
    }

    return acc;
  }, []);

  return buildFuse(routes).search(text);
}
