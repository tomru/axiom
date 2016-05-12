import humanize from 'humanize-string';
import { ROUTE_DOCS } from 'style-guide/constants/Routing';
import { versions } from 'docs';

function createToPath(paths) {
  return paths.reduce((acc, path) => {
    return `${acc}/${path}`;
  }, `/${ROUTE_DOCS}`);
}

function createRoute(version, id, route, parentId = null, parentPaths = []) {
  const { path, hidden = false, searchable = true } = route;

  return {
    id,
    path,
    parentId,
    hidden,
    searchable,
    name: humanize(path),
    to: createToPath([...parentPaths, path]),
    children: [],
    isOpen: false,
    isActive: false,
  };
}

export function hasVisibleChildren({children = []}) {
  return children.filter(({hidden = false}) => !hidden).length > 0;
}

function createRoutes(docs, version) {
  return Object.keys(docs).reduce((groups, key) => {
    const doc = docs[key];
    let docGroup = groups.find(({id}) => id === doc.group);

    if (!docGroup) {
      docGroup = createRoute(version, doc.group, { path: doc.group }, null, [version]);
      groups.push(docGroup);
    }

    docGroup.children.push(createRoute(version, doc.id, doc, docGroup.id, [version, docGroup.path]));
    docGroup.hasChildren = hasVisibleChildren(docGroup);

    return groups;
  }, []);
}

export function createNavStructure(versions) {
  return Object.keys(versions).reduce((structure, version) => {
    structure[version] = createRoutes(versions[version], version);
    return structure;
  }, {});
}

export function findDocById(version, id) {
  for (let key in versions[version]) {
    if (versions[version][key].id === id) {
      return versions[version][key];
    }
  }
}

function flattenChildren(item, children = [item]) {
  if (item.children && item.children.length) {
    item.children.forEach((child) => {
      children.push(child);
      flattenChildren(child, children);
    });
  }

  return children;
}

export function flattenStructure(items) {
  return [].concat.apply([], items.map((item) => flattenChildren(item)));
}

export function findById(items, id) {
  return flattenStructure(items)
    .find((item) => item.id === id);
}

export function findByActive(items) {
  return flattenStructure(items)
    .filter((item) => item.isActive);
}

function flattenParents(items, item, parents = [item]) {
  if (item.parentId) {
    const parent = findById(items, item.parentId);

    if (parent) {
      parents.push(parent);
      flattenParents(items, parent, parents);
    }
  }

  return parents;
}

export function getParentIds(items, item) {
  return flattenParents(items, item).map(({id}) => id);
}

export function getParentNames(items, item) {
  return flattenParents(items, item).map(({name}) => name);
}
