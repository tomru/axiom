import React, { Children } from 'react';

export function findComponent(components, Component) {
  return Children.toArray(components).find(({type}) => type === Component);
}

export function findComponents(components, Component) {
  return Children.toArray(components).filter(({type}) => type === Component);
}

export function classHelper(array, findPredicate, classPredicate) {
  const element = array.find(findPredicate);

  if (element) {
    return classPredicate(element);
  }
}

export function blacklist(props, list) {
  return Object.keys(props).reduce((acc, prop) => {
    if (typeof prop === 'string') {
      if (!list.includes(prop)) {
        acc[prop] = props[prop];
      }
    }

    return acc;
  }, {});
}
