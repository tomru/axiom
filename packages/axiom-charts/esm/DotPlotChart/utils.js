function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

export var formatData = function formatData(key, data) {
  var order = key.map(function (_ref) {
    var color = _ref.color;
    return color;
  });

  return data.map(function (_ref2) {
    var label = _ref2.label,
        benchmark = _ref2.benchmark,
        values = _ref2.values;
    return {
      label: label,
      benchmark: benchmark,
      values: Object.keys(values).map(function (color) {
        return { color: color, value: values[color] };
      }).sort(function (a, b) {
        return a.value - b.value || order.indexOf(a.color) - order.indexOf(b.color);
      }).reduce(function (acc, _ref3) {
        var value = _ref3.value,
            color = _ref3.color;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = acc[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _data = _step.value;

            if (_data.value === value) {
              _data.colors.push(color);
              return acc;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        acc.push({ value: value, colors: [color] });

        return acc;
      }, [])
    };
  });
};

export var flattenValues = function flattenValues(data) {
  return data.reduce(function (memo, _ref4) {
    var _memo;

    var benchmark = _ref4.benchmark,
        values = _ref4.values;

    if (benchmark) {
      memo.push(benchmark);
    }

    memo = (_memo = memo).concat.apply(_memo, _toConsumableArray(Object.values(values)));
    return memo;
  }, []);
};

export var getLines = function getLines(data, benchmark, mouseOverRowIndex, mouseOverColors, rowIndex, lower, upper) {
  var lines = [];
  var elements = data.filter(function (_ref5) {
    var colors = _ref5.colors;
    return mouseOverRowIndex === rowIndex || !isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors);
  });

  if (benchmark !== undefined) {
    elements.push({ colors: [], value: benchmark });
  }

  elements.sort(function (a, b) {
    return a.value - b.value;
  });

  for (var i = 0; i < elements.length - 1; i++) {
    lines.push({
      fromBenchmark: elements[i].colors.length === 0,
      toBenchmark: elements[i + 1] && elements[i + 1].colors.length === 0,
      faded: isLineFaded(mouseOverRowIndex),
      fromX: (elements[i].value - lower) / (upper - lower) * 100,
      toX: (elements[i + 1].value - lower) / (upper - lower) * 100
    });
  }

  return lines;
};

export var getDotColors = function getDotColors(mouseOverRowIndex, mouseOverColors, rowIndex, colors) {
  return mouseOverColors.length && colors.length > 1 && mouseOverRowIndex !== rowIndex ? colors.filter(function (color) {
    return mouseOverColors.indexOf(color) > -1;
  }) : colors;
};

export var isBenchmarkFaded = function isBenchmarkFaded(mouseOverRowIndex) {
  return mouseOverRowIndex !== null;
};
export var isLineFaded = function isLineFaded(mouseOverRowIndex) {
  return mouseOverRowIndex !== null;
};

export var isDotFaded = function isDotFaded(mouseOverRowIndex, mouseOverColors, rowIndex, colors) {
  return isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) && mouseOverRowIndex === rowIndex;
};

export var isDotHidden = function isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) {
  return !!mouseOverColors.length && !mouseOverColors.some(function (color) {
    return colors.indexOf(color) > -1;
  });
};

export var isValueHidden = function isValueHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) {
  if (mouseOverColors.length < 1) {
    return true;
  }

  if (mouseOverColors.length === 1) {
    return isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors);
  }

  return mouseOverRowIndex !== rowIndex || mouseOverColors.some(function (color) {
    return colors.indexOf(color) === -1;
  });
};

export var isValueStrong = function isValueStrong(mouseOverRowIndex, mouseOverColors, rowIndex, colors) {
  return mouseOverRowIndex === rowIndex && !isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors);
};