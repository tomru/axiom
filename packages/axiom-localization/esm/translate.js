export default (function (config) {
  return function (text) {
    var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var lngPrefix = lng.split(/[^A-Za-z]/)[0];
    return config[text] && (config[text][lng] || config[text][lngPrefix]) || text;
  };
});