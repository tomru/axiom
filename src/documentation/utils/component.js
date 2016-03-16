import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export function getComponentText(Component) {
  const element = <Component />;
  const div = document.createElement('div');

  div.innerHTML = renderToStaticMarkup(element);

  return div.textContent;
}
