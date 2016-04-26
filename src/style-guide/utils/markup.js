import {
  js as beautifyJs,
  html as beautifyHtml,
  css as beautifyCSS,
} from 'js-beautify';

// Encode all of the HTML characters so it can be displayed.
function encodeHTML(html) {
  return html
    .replace(/=""/g, '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatHtml(html) {
  return beautifyHtml(html, {
    indent_size: 2,
    preserve_newlines: true,
    unformatted: [],
  });
}

function formatCss(css) {
  return beautifyCSS(css);
}

function formatJs(js) {
  return beautifyJs(js, {
    indent_size: 2,
  });
}

function prepareSnippet(snippet, transforms) {
  return transforms.reduce((transformedContent, transform) => transform(transformedContent), snippet);
}

export function prepareHTMLSnippet(snippet) {
  return prepareSnippet(snippet, [
    formatHtml,
    encodeHTML,
  ]);
}

export function prepareJSXSnippet(snippet) {
  return prepareSnippet(snippet, [
    formatHtml,
    encodeHTML,
  ]);
}

export function prepareSassSnippet(snippet) {
  return prepareSnippet(snippet, [
    formatCss,
  ]);
}

export function prepareBashSnippet(snippet) {
  return prepareSnippet(snippet, []);
}

export function prepareJSSnippet(snippet) {
  return prepareSnippet(snippet, []);
}

export function prepareAPISnippet(snippet) {
  return prepareSnippet(snippet, [
    formatJs,
  ]);
}
