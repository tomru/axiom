import React from 'react';
import { extractSnippetLayers } from './extracting';

function renderProp(prop, value) {
  if (typeof prop === 'object') {
    return Object.keys(prop).reduce((acc, key) => {
      return `${acc} ${renderProp(key, prop[key])}`;
    }, '');
  }

  if (typeof value === 'string') {
    return `${prop}="${value}"`;
  }

  return `${prop}={${value}}`;
}

function renderHtml(layer, key) {
  if (typeof layer === 'string') {
    return '';
  }

  if (layer.comment) {
    return `\n<!-- ${layer.comment} -->`;
  }

  const { Component, props = {}, children, demoContent } = layer;

  return (
    <Component {...props} key={key}>
      {do {
        if (demoContent) {
          '...';
        } else if (Array.isArray(children)) {
          children.map((child, index) => renderHtml(child, index));
        } else if (typeof children === 'string') {
          children;
        }
      }}
    </Component>
  );
}

function renderJsx(layer) {
  if (typeof layer === 'string') {
    return '';
  }

  if (layer.comment) {
    return `\n// ${layer.comment}`;
  }

  const { Component, props = {}, children, demoContent } = layer;
  let snippet = `<${Component.__ax_displayName} ${renderProp(props)}`;

  if (children) {
    snippet += '>';

    if (demoContent) {
      snippet += '...';
    } else if (Array.isArray(children)) {
      children.forEach((child) => snippet += renderJsx(child));
    } else if (typeof children === 'string') {
      snippet += children;
    }

    snippet += `</${Component.__ax_displayName}>`;
  } else {
    snippet += ' />';
  }

  return snippet;
}

function renderJs(layer) {
  if (layer.comment) {
    return `// ${layer.comment}\n`;
  }

  return `${layer.code.js}\n`;
}

function renderComponentsSnippets(layers, renderFn) {
  if (layers.some((layer) => layer.Component && !layer.code)) {
    return layers
      .filter((layer) => (layer.Component && !layer.code) || layer.comment)
      .map((layer) => renderFn(layer));
  }

  return [];
}

function renderJsSnippets(layers) {
  if (layers.some((layer) => layer.code)) {
    return layers
      .filter((layer) => (layer.code || layer.comment))
      .map((layer) => renderJs(layer));
  }

  return [];
}

export function renderSnippets(layer) {
  const extractedLayers =  extractSnippetLayers(layer);

  return {
    html: renderComponentsSnippets(extractedLayers, renderHtml),
    jsx: renderComponentsSnippets(extractedLayers, renderJsx),
    js: renderJsSnippets(extractedLayers),
  };
}



