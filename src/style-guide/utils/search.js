import Fuse from 'fuse.js';
import { DOC_STRUCTURE } from 'style-guide/constants/DocStructure';
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
    keys: ['name', 'to', 'text'],
    threshold: 0.0,
    tokenize: true,
  });
}

export function searchRoutesForText(text) {
  const routes = flattenStructure(DOC_STRUCTURE)
    .filter((doc) => doc.searchable && doc.children.length === 0)
    .map((doc) => {
      return {
        ...doc,
        text: extractExamples(findDocById(doc.id).examples),
      };
    });

  return buildFuse(routes).search(text);
}
