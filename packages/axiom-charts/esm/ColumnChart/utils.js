export var formatData = function formatData(key, data) {
  var order = key.map(function (_ref) {
    var color = _ref.color;
    return color;
  });

  return data.map(function (_ref2) {
    var label = _ref2.label,
        subLabel = _ref2.subLabel,
        values = _ref2.values;
    return {
      label: label,
      subLabel: subLabel,
      values: Object.keys(values).map(function (color) {
        return { color: color, value: values[color] };
      }).sort(function (a, b) {
        return order.indexOf(a.color) - order.indexOf(b.color);
      })
    };
  });
};