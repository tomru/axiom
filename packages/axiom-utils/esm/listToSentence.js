export default (function (list) {
  var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return list.length === 0 ? '' : list.slice(1).reduce(function (acc, item, index, list) {
    return '' + acc + (index === list.length - 1 ? ' and ' : ', ') + item;
  }, '' + initial + list[0]);
});