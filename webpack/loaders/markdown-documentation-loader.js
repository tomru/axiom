function escape(line) {
  return line
    .replace(/`/g, '\\`');
}

function prepareDoc(content) {
  let inJsx = false;
  let jsxContent = '';

  return content
    .split('\n')
    .reduce((array, line) => {
      if (!inJsx && line.includes('```jsx')) {
        inJsx = true;
        jsxContent += '(routeParams, queryParams) => { return ';
      } else if (inJsx) {
        if (line.includes('```')) {
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

  const importsRegex = /(import[^;]*;)/g;
  const imports = source.match(importsRegex) || [];
  const nonImports = source.replace(importsRegex, '');

  this.callback(null, `
    import React from 'react';
    ${imports.join('\n')}

    module.exports = (routeParams, queryParams) => [${prepareDoc(nonImports)}];
  `, map);
}
