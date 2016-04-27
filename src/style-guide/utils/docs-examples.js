import React from 'react';

function getSnippetLayers(layer, children = []) {
  if (layer.snippetContent) {
    if (layer.title) {
      children.push(layer.title);
    }

    layer.children.forEach((child) => children.push(child));
  } else if (Array.isArray(layer.children)) {
    layer.children.forEach((child) => getSnippetLayers(child, children));
  }

  return children;
}

function propsString(prop, value) {
  if (typeof prop === 'object') {
    return Object.keys(prop).reduce((acc, key) => {
      return `${acc} ${propsString(key, prop[key])}`;
    }, '');
  }

  if (typeof value === 'string') {
    return `${prop}="${value}"`;
  }

  return `${prop}={${value}}`;
}

function buildHtmlSnippet(layer, key) {
  if (typeof layer === 'string') {
    return `<!-- ${layer} -->`;
  }

  const { Component, props = {}, children, demoContent } = layer;

  return (
    <Component {...props} key={key}>
      {do {
        if (demoContent) {
          '...';
        } else if (Array.isArray(children)) {
          children.map((child, index) => buildHtmlSnippet(child, index));
        } else if (typeof children === 'string') {
          children;
        }
      }}
    </Component>
  );
}

function buildJsxSnippet(layer, snippet = '') {
  if (typeof layer === 'string') {
    // TODO: Add JSX comment
    return ``;
  }

  const { Component, props = {}, children, demoContent } = layer;
  snippet += `<${Component.__ax_displayName} ${propsString(props)}`;

  if (children) {
    snippet += '>';

    if (demoContent) {
      snippet += '...';
    } else if (Array.isArray(children)) {
      children.forEach((child) => snippet += buildJsxSnippet(child));
    } else if (typeof children === 'string') {
      snippet += children;
    }

    snippet += `</${Component.__ax_displayName}>`;
  } else {
    snippet += '/>';
  }

  return snippet;
}

function buildJsSnippet(layer) {
  return layer.code.js;
}

export function getLayersHtmlSnippets(layer) {
  const layers = getSnippetLayers(layer).filter((layer) => !layer.code);

  return layers.some((layer) => typeof layer === 'object')
    ? layers.map((layer) => buildHtmlSnippet(layer))
    : [];
}

export function getLayersJsxSnippets(layer) {
  const layers = getSnippetLayers(layer).filter((layer) => !layer.code);

  return layers.some((layer) => typeof layer === 'object')
    ? layers.map((layer) => buildJsxSnippet(layer))
    : [];
}

export function getLayersJsSnippets(layer) {
  return getSnippetLayers(layer)
    .filter((layer) => layer.code && layer.code.js)
    .map((layer) => buildJsSnippet(layer))
    .join('\n');
}

export function getModuleComponents(components = []) {
  function extractComponents({children = [], Component}, extracted = []) {
    if (!extracted.includes(Component)) {
      extracted.push(Component);
    }

    children.forEach((child) => {
      extractComponents(child, extracted);
    });

    return extracted;
  }

  const extractedComponents = []
  components.forEach((c) => extractComponents(c, extractedComponents));
  return extractedComponents;
}
