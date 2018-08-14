var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

export var flipOrders = {
  anticlockwise: {
    top: ['left', 'bottom', 'right'],
    right: ['top', 'left', 'bottom'],
    bottom: ['right', 'top', 'left'],
    left: ['bottom', 'right', 'top']
  },
  clockwise: {
    top: ['right', 'bottom', 'left'],
    right: ['bottom', 'left', 'top'],
    bottom: ['left', 'top', 'right'],
    left: ['top', 'right', 'bottom']
  },
  mirror: {
    top: ['bottom'],
    right: ['left'],
    bottom: ['top'],
    left: ['right']
  }
};

export var positionToPlacement = function positionToPlacement(position, offset) {
  return offset === 'middle' ? position : position + '-' + offset;
};

export var placementToPosition = function placementToPosition(placement) {
  var _placement$split = placement.split('-'),
      _placement$split2 = _slicedToArray(_placement$split, 2),
      position = _placement$split2[0],
      offset = _placement$split2[1];

  return [position, offset || 'middle'];
};

export var getPlacementFlipOrder = function getPlacementFlipOrder(placement, flip) {
  var _placementToPosition = placementToPosition(placement),
      _placementToPosition2 = _slicedToArray(_placementToPosition, 1),
      primary = _placementToPosition2[0];

  return [primary].concat(_toConsumableArray(flipOrders[flip][primary]));
};