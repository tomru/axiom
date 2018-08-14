import { Children } from 'react';
import isComponent from './isComponent';

export default (function (elements, Component) {
  var arr = Children.toArray(elements);
  for (var i = 0; i < arr.length; i++) {
    if (isComponent(arr[i], Component)) {
      return arr[i];
    }
  }
});