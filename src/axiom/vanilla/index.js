import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as components from '../react';

function axiom(componentId, options = {}) {
  const Component = components[componentId];

  return renderToStaticMarkup(
    <Component {...options} />
  );
}

export default axiom;
