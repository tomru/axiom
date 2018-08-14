import format from 'date-fns/format';

export default (function (date) {
  return format(date, 'YYYY-MM-DD') + '_at_' + format(date, 'HH.mm.ss') + '_UTC';
});