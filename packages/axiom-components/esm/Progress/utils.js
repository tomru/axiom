var DIAMETER = 24;
var STROKE_WIDTH = 4;
var INNER_RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
var STROKE_DASH_ARRAY = 2 * Math.PI * INNER_RADIUS;

export var getArcProperties = function getArcProperties(_ref) {
  var percent = _ref.percent;
  return {
    diameter: DIAMETER,
    innerRadius: INNER_RADIUS,
    strokeWidth: STROKE_WIDTH,
    strokeDasharray: STROKE_DASH_ARRAY,
    strokeDashoffset: (100 - percent) / 100 * STROKE_DASH_ARRAY
  };
};