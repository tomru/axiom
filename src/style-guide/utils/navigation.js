import humanize from 'humanize-string';
import { ROUTE_DOCS } from 'style-guide/constants/Routing';

export function createToPath(paths) {
  return paths.reduce((acc, path) => {
    return `${acc}/${path}`;
  }, `/${ROUTE_DOCS}`);
}

export function createRoute(id, route, parentId = null, parentPaths = []) {
  const { path, hidden = false, searchable = true, examples } = route;

  return {
    id,
    path,
    parentId,
    hidden,
    searchable,
    examples,
    name: humanize(path),
    to: createToPath([...parentPaths, path]),
    children: [],
    isOpen: false,
    isActive: false,
  };
}

export function createDocStructure(docs) {
  return Object.keys(docs).reduce((groups, key) => {
    const doc = docs[key];
    let docGroup = groups.find(({path}) => path === doc.group);

    if (!docGroup) {
      docGroup = createRoute(doc.group, { path: doc.group });
      groups.push(docGroup);
    }

    docGroup.children.push(createRoute(key, doc, docGroup.id, [docGroup.path]));
    docGroup.hasChildren = hasVisibleChildren(docGroup);

    return groups;
  }, []);
}

export function createNavStructure(docStructure) {
  function removeProperties(doc) {
    return {
      ...doc,
      examples: undefined,
      children: doc.children.map(removeProperties),
    };
  }

  return docStructure.map(removeProperties);
}

export function findById(items, id) {
  return flattenStructure(items)
    .find((item) => item.id === id);
}

export function findByActive(items) {
  return flattenStructure(items)
    .filter((item) => item.isActive);
}

export function hasVisibleChildren({children = []}) {
  return children.filter(({hidden = false}) => !hidden).length > 0;
}

export function flattenChildren(item, children = [item]) {
  if (item.children && item.children.length) {
    item.children.forEach((child) => {
      children.push(child);
      flattenChildren(child, children);
    });
  }

  return children;
}

export function flattenParents(items, item, parents = [item]) {
  if (item.parentId) {
    const parent = findById(items, item.parentId);

    if (parent) {
      parents.push(parent);
      flattenParents(items, parent, parents);
    }
  }

  return parents;
}

export function flattenStructure(items) {
  return [].concat.apply([], items.map((item) => flattenChildren(item)));
}
