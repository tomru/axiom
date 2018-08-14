export default (function (data, filter) {
  return data.reduce(function (grouped, _ref) {
    var color = _ref.color,
        label = _ref.label,
        values = _ref.values;

    if (filter && !filter.includes(label)) {
      return grouped;
    }

    values.forEach(function (value, index) {
      if (!grouped[index]) {
        grouped[index] = [{ colors: [color], labels: [label], value: value }];
      } else {
        var group = grouped[index].find(function (group) {
          return group.value === value;
        });

        if (group) {
          group.colors.push(color);
          group.labels.push(label);
        } else {
          grouped[index].push({ colors: [color], labels: [label], value: value });
        }
      }
    });

    return grouped;
  }, []);
});