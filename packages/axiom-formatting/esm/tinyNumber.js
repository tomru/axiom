import toSuffixed from './toSuffixed';

export default (function (number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return toSuffixed(number, precision, {
    TRILLION: 'T',
    BILLION: 'B',
    MILLION: 'M',
    THOUSAND: 'K'
  });
});