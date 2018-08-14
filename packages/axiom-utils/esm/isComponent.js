import { isValidElement } from 'react';

export default (function (element, Component) {
  return isValidElement(element) && (typeof Component === 'string' ? element.type.typeRef === Component : element.type === Component);
});