import uuid from 'uuid';

export function routeToNavItem(parentId = null) {
  return (route) => {
    const { name, path, to, component, children = [] } = route;
    const id = uuid.v1();

    return {
      id,
      name,
      path,
      to,
      parentId,
      component,
      isOpen: false,
      isActive: false,
      hasChildren: hasVisibleChildren(route),
      children: children.map(routeToNavItem(id)),
    };
  };
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
    parents.push(parent);
    flattenParents(items, parent, parents);
  }

  return parents;
}

export function flattenStructure(items) {
  return [].concat.apply([], items.map((item) => flattenChildren(item)));
}
