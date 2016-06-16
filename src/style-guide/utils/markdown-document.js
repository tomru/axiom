import docs from 'docs';
import * as routes  from 'style-guide/constants/Routing';
import { V_CURRENT } from 'style-guide/constants/Versions';

export function markdownRouteToPath(route) {
  return  `/${routes.DOCS}/${route.join('/')}`;
}

export function pathToMarkdownRoute(path) {
  const matchRegex = new RegExp(`^\/?${routes.DOCS}\/([\\s\\S]*)`);
  const match = path.match(matchRegex);

  if (match) {
    return match[1].split('/');
  }

  return null;
}

export function getVersion(route) {
  return docs.find(({ id }) => id === (Array.isArray(route) ? route[0] : route));
}

export function getFirstDocumentRoute(version = V_CURRENT, { id, children } = getVersion(version), paths = []) {
  if (Array.isArray(children)) {
    return getFirstDocumentRoute(version, children[0], [...paths, id]);
  }

  return [...paths, id];
}

export function getMarkdownContentFunction(route) {
  return route.reduce((level, nextLevelId) => {
    if (Array.isArray(level)) {
      const nextLevel = level.find(({ id }) => id === nextLevelId);

      if (nextLevel) {
        return nextLevel.children;
      }
    }

    return null;
  }, docs);
}

export function hasMarkdownContent(path, route =  pathToMarkdownRoute(path)) {
  return Array.isArray(route) && typeof getMarkdownContentFunction(route) === 'function';
}

