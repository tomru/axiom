import longNumber from './longNumber';

var isInvalidPrecision = function isInvalidPrecision(precision) {
  return isNaN(parseInt(precision)) && precision % 1 === 0 && precision >= 0 && precision <= 20;
};

export var toFixed = function toFixed(number, precision) {
  if (!isInvalidPrecision(precision)) {
    number = number.toFixed(precision);
  }

  return number.toString().replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1');
};

export var isInvalidNumber = function isInvalidNumber(number) {
  return isNaN(parseFloat(number)) || !isFinite(number);
};

export default (function (number, precision, suffixes) {
  var threshold = 9999;
  var metricSuffix = [{ n: 1E12, suffix: suffixes.TRILLION }, { n: 1E9, suffix: suffixes.BILLION }, { n: 1E6, suffix: suffixes.MILLION }, { n: 1E3, suffix: suffixes.THOUSAND }];

  if (isInvalidNumber(number)) {
    return '-';
  }

  if (number <= threshold) {
    return longNumber(number, precision);
  }

  for (var i = 0; i < metricSuffix.length; i++) {
    if (number >= metricSuffix[i].n) {
      return '' + toFixed(number / metricSuffix[i].n, precision) + metricSuffix[i].suffix;
    }
  }
});