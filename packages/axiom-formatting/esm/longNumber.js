var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { isInvalidNumber, toFixed } from './toSuffixed';

export var NUMBER_SEPARATOR = '\u2009';

export default (function (number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (isInvalidNumber(number)) {
    return '-';
  }

  var _toFixed$split = toFixed(number, precision).split('.'),
      _toFixed$split2 = _slicedToArray(_toFixed$split, 2),
      integer = _toFixed$split2[0],
      fraction = _toFixed$split2[1];

  var formatted = parseFloat(integer).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + NUMBER_SEPARATOR);

  return fraction ? formatted + '.' + fraction : formatted;
});