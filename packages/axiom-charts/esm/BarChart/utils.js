function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

export var formatData = function formatData(key, data) {
  var order = key.map(function (_ref) {
    var color = _ref.color;
    return color;
  });

  return data.map(function (_ref2) {
    var label = _ref2.label,
        benchmark = _ref2.benchmark,
        hidden = _ref2.hidden,
        values = _ref2.values;
    return {
      label: label,
      benchmark: benchmark,
      hidden: hidden,
      values: Object.keys(values).map(function (color) {
        return { color: color, value: values[color] };
      }).sort(function (a, b) {
        return order.indexOf(a.color) - order.indexOf(b.color);
      })
    };
  });
};

export var flattenValues = function flattenValues(data) {
  return data.reduce(function (memo, _ref3) {
    var _memo;

    var benchmark = _ref3.benchmark,
        values = _ref3.values;

    if (benchmark) {
      memo.push(benchmark);
    }

    memo = (_memo = memo).concat.apply(_memo, _toConsumableArray(Object.values(values)));
    return memo;
  }, []);
};

export var hasMultipleValues = function hasMultipleValues(data) {
  return data.some(function (_ref4) {
    var values = _ref4.values;
    return Object.keys(values).length > 1;
  });
};