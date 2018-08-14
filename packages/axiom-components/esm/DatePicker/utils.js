import { addDays, addMonths as dateFnsAddMonths, endOfDay, endOfMonth, format, getDay, getDaysInMonth, isAfter, isBefore, isSameDay as dateFnsIsSameDay, isSameMonth as dateFnsIsSameMonth, setHours, startOfMonth } from 'date-fns';

export var buildMonthGrid = function buildMonthGrid(date) {
  var startMonth = setHours(startOfMonth(date), 12);
  var startDay = getDay(startMonth) === 0 ? 6 : getDay(startMonth) - 1;
  var grid = [];

  for (var i = 0; i < startDay; i++) {
    grid.push(null);
  }

  for (var _i = 0; _i < getDaysInMonth(startMonth); _i++) {
    grid.push(addDays(startMonth, _i));
  }

  return grid.reduce(function (w, n, i) {
    (w[i / 7 | 0] = w[i / 7 | 0] || []).push(n);
    return w;
  }, []);
};

export var addMonths = function addMonths(date, months) {
  return date && dateFnsAddMonths(date, months);
};
export var dateOrNow = function dateOrNow(date) {
  return setHours(date ? new Date(date) : new Date(), 12);
};
export var getDayNumber = function getDayNumber(date) {
  return format(date, 'D');
};
export var getMonthName = function getMonthName(date) {
  return format(date, 'MMMM');
};
export var getYearNumber = function getYearNumber(date) {
  return format(date, 'YYYY');
};

export var isAfterDay = function isAfterDay(aDate, bDate) {
  return !!bDate && isAfter(endOfDay(aDate), endOfDay(bDate));
};

export var isBeforeDay = function isBeforeDay(aDate, bDate) {
  return !!bDate && isBefore(endOfDay(aDate), endOfDay(bDate));
};

export var isBetweenDate = function isBetweenDate(date, aDate, bDate) {
  return !!aDate && !!bDate && isAfterDay(date, aDate) && isBeforeDay(date, bDate);
};

export var isSameDay = function isSameDay(aDate, bDate) {
  return !!bDate && dateFnsIsSameDay(aDate, bDate);
};
export var isSameMonth = function isSameMonth(aDate, bDate) {
  return !!bDate && dateFnsIsSameMonth(aDate, bDate);
};

export var isSameOrAfterMonth = function isSameOrAfterMonth(aDate, bDate) {
  return !!bDate && (isSameMonth(aDate, bDate) || isAfter(endOfMonth(aDate), endOfMonth(bDate)));
};

export var isSameOrBeforeMonth = function isSameOrBeforeMonth(aDate, bDate) {
  return !!bDate && (isSameMonth(aDate, bDate) || isBefore(endOfMonth(aDate), endOfMonth(bDate)));
};

export var isOneOfDays = function isOneOfDays(date, dates) {
  return dates.some(function (bDate) {
    return isSameDay(date, bDate);
  });
};

export var orderDates = function orderDates(aDate, bDate) {
  return isAfterDay(aDate, bDate) ? [bDate, aDate] : [aDate, bDate];
};