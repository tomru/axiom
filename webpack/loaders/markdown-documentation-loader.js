const JSX_RENDER_OPEN = '```jsx';
const JSX_RENDER_CLOSE = '```';

function escape(line) {
  return line
    .replace(/```jsx:.*/g, '```jsx')
    .replace(/\\`/g, '\\\\`')
    .replace(/`/g, '\\`');
}

function prepareDoc(content) {
  let inJsx = false;
  let jsxContent = '';

  return content
    .split('\n')
    .reduce((array, line) => {
      if (!inJsx && line === JSX_RENDER_OPEN) {
        inJsx = true;
        jsxContent += '() => { return ';
      } else if (inJsx) {
        if (line === JSX_RENDER_CLOSE) {
          inJsx = false;
          jsxContent += '}';
          array.push(jsxContent);
          jsxContent = '';
        } else {
          jsxContent += line;
        }
      } else {
        array.push(`\`${escape(line)}\``);
      }

      return array;
    }, []);
}

module.exports = function markdownLoader(source, map) {
  this.cacheable && this.cacheable();

  const importsRegex = /^(```imports\n([\s\S]*?)(?=```)```)/;
  const imports = (importsRegex.exec(source) || [])[2];
  const content = source.replace(importsRegex, '');

  this.callback(null, `
    import React from 'react';
    ${imports}

    module.exports = (routeParams, queryParams) => [${prepareDoc(content)}];
  `, map);
}
