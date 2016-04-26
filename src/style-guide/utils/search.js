import uuid from 'uuid';
import Fuse from 'fuse.js';
import * as docs from '../../docs/current';

function routeToText({id, path, group, examples}) {
  return {
    id,
    path,
    group,
    examples: examples({}, {}),
  };
}

function buildFuse(routes) {
  const routesText = routes.map(routeToText);
  const fuseConfig = {
    keys: ['id', 'path', 'group', 'examples.title'],
    tokenize: true,
    threshold: 0.2,
    getFn: (obj, path) => {
      return JSON.stringify(obj);
    },
  };

  return new Fuse(routesText, fuseConfig);;
}

export function searchRoutesForText(text) {
  const routes = Object.keys(docs).reduce((acc, key) => {
    if (docs[key].searchable !== false) {
      acc.push(docs[key]);
    }

    return acc;
  }, []);

  return buildFuse(routes).search(text);
}
