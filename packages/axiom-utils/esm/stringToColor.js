import * as _ from '@brandwatch/axiom-materials/dist/colors';


var productColors = Object.keys(_.userDefinedGraphColors);

export default (function (string) {
  var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : productColors;
  return colors[string.split('').reduce(function (acc, val) {
    return acc + val.charCodeAt();
  }, 0) % (colors.length - 1)];
});