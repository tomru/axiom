import uuid from 'uuid';
import Fuse from 'fuse.js';
import docStructure, { componentMap } from 'documentation/constants/DocStructure';
import { flattenStructure } from 'documentation/utils/navigation';
import { getComponentText } from 'documentation/utils/component';

function routeToText({name, to, component}) {
  const routeComponent = typeof componentMap[component] === 'function'
      ? componentMap[component]
      : componentMap[component].component;

  return {
    name,
    to,
    meta: routeComponent.meta || {},
    text: getComponentText(routeComponent),
  };
}

function buildFuse(routes) {
  const routesText = routes.map(routeToText);
  const fuseConfig = {
    keys: ['name', 'text', 'to'],
    tokenize: true,
    threshold: 0.2,
  };

  return new Fuse(routesText, fuseConfig);;
}

export function searchRoutesForText(text) {
  const flatStructure = flattenStructure(docStructure);
  const applicableRoutes = flatStructure.filter(({component, searchable = true}) => component && searchable);

  return buildFuse(applicableRoutes).search(text);
}
