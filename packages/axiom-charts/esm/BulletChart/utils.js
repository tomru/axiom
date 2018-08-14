export var formatData = function formatData(key, data) {
  var order = key.map(function (_ref) {
    var color = _ref.color;
    return color;
  });
  var highestValue = getHighestValue(data);

  return data.map(function (_ref2) {
    var label = _ref2.label,
        subLabel = _ref2.subLabel,
        values = _ref2.values;
    return {
      label: label,
      subLabel: subLabel,
      values: Object.keys(values).map(function (color) {
        return {
          color: color,
          valueLabel: values[color],
          value: Math.floor(values[color] / highestValue * 100)
        };
      }).sort(function (a, b) {
        return order.indexOf(a.color) - order.indexOf(b.color);
      })
    };
  });
};

export var getHighestValue = function getHighestValue(data) {
  var max = 0;

  for (var i = 0; i < data.length; i++) {
    for (var color in data[i].values) {
      if (data[i].values[color] > max) {
        max = data[i].values[color];
      }
    }
  }

  return max;
};

export var findBarGroupMax = function findBarGroupMax(acc, cur) {
  return cur.value > acc.value ? cur.value : acc.value;
};