import uuid from 'uuid';
import { cloneElement, isValidElement } from 'react';

function build(element) {
  if (Array.isArray(element)) {
    return element.reduce((children, element) => {
      const builtElement = build(element);

      if (builtElement) {
        children.push(builtElement);
      }

      return children;
    }, []);
  }

  if (!isValidElement(element)) {
    if (typeof element === 'string') {
      return element.trim() ? element : null;
    }

    return element;
  }


  return cloneElement(element, { key: uuid.v4() }, build(element.props.children));
}


export default function buildReactElement(element, routeParams, queryParams) {
  return build(element(routeParams, queryParams));
}
