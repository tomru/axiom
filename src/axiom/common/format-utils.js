import moment from 'moment';

const delimiter = ' ';

export function formatNumber(n) {
  return n
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${delimiter}`);
}


export function formatDate(d, format) {
  return moment(d).format(format)
}

export function formatDateShort(d) {
  return formatDate(d, 'DD/MM/YYYY');
}

export function formatDateMedium(d) {
  return formatDate(d, 'DD MMMM YYYY');
}

export function formatDateLong(d) {
  return formatDate(d, 'dddd Do MMMM YYYY');
}
