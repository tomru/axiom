var DEFAULT_TICK_COUNT = 5;
var MIN_TICK_COUNT = 3;

export function getEquallyDistributedAxisLabels(_ref) {
  var lower = _ref.lower,
      upper = _ref.upper,
      _ref$tickCount = _ref.tickCount,
      tickCount = _ref$tickCount === undefined ? DEFAULT_TICK_COUNT : _ref$tickCount,
      _ref$labelFormatter = _ref.labelFormatter,
      labelFormatter = _ref$labelFormatter === undefined ? function (v) {
    return v;
  } : _ref$labelFormatter;


  if (lower === upper) {
    return [];
  }

  var finalTickCount = Math.max(MIN_TICK_COUNT, tickCount);
  var tickSize = (upper - lower) / (finalTickCount - 1);
  var ticks = [];

  for (var index = 0; index < finalTickCount; index++) {
    ticks.push(index * tickSize + lower);
  }

  return ticks.map(labelFormatter);
}

function getOrder(value) {
  if (value === 0) {
    return 0;
  }

  return Math.floor(Math.log10(value));
}

export function getAxisUpper(values) {
  var max = Math.max.apply(null, values);
  var mag = Math.pow(10, getOrder(max));
  return Math.ceil(max / mag) * mag;
}

export default {
  getEquallyDistributedAxisLabels: getEquallyDistributedAxisLabels,
  getAxisUpper: getAxisUpper
};