import format from 'date-fns/format';

export var FORMAT_MAP = {
  short: 'DD MMM',
  medium: 'DD MMM YYYY',
  long: 'ddd, DD MMM YYYY',
  time: 'HH:mm',
  timezone: '(UTCZ)'
};

export default (function (formatStr) {
  return function (date) {
    return format(date, formatStr);
  };
});