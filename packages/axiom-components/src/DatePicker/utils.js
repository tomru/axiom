import {
  addDays as dateFnsAddDays,
  addMonths as dateFnsAddMonths,
  endOfDay as dateFnsEndOfDay,
  endOfMonth,
  format,
  getDay,
  getDaysInMonth,
  isAfter,
  isBefore,
  isSameDay as dateFnsIsSameDay,
  isSameMonth as dateFnsIsSameMonth,
  setHours,
  startOfDay as dateFnsStartOfDay,
  startOfMonth,
} from 'date-fns';

export const buildMonthGrid = (date) => {
  const startMonth = setHours(startOfMonth(date), 12);
  const startDay = getDay(startMonth) === 0 ? 6 : getDay(startMonth) - 1;
  const grid = [];

  for (let i = 0; i < startDay; i++) {
    grid.push(null);
  }

  for (let i = 0; i < getDaysInMonth(startMonth); i++) {
    grid.push(dateFnsAddDays(startMonth, i));
  }

  return grid.reduce((w, n, i) => {
    (w[i / 7 | 0] = w[i / 7 | 0] || []).push(n);
    return w;
  }, []);
};

export const addDays = (date, days) => date && dateFnsAddDays(date, days);
export const addMonths = (date, months) => date && dateFnsAddMonths(date, months);
export const dateOrNow = (date) => setHours(date ? new Date(date) : new Date(), 12);
export const getDayNumber = (date) => format(date, 'D');
export const getMonthName = (date) => format(date, 'MMMM');
export const getYearNumber = (date) => format(date, 'YYYY');
export const startOfDay = date => date && dateFnsStartOfDay(date);
export const endOfDay = date => date && dateFnsEndOfDay(date);

export const isAfterDay = (aDate, bDate) =>
  !!bDate && isAfter(
    dateFnsEndOfDay(aDate),
    dateFnsEndOfDay(bDate),
  );

export const isBeforeDay = (aDate, bDate) =>
  !!bDate && isBefore(
    dateFnsEndOfDay(aDate),
    dateFnsEndOfDay(bDate),
  );

export const isBetweenDate = (date, aDate, bDate) =>
  !!aDate && !!bDate &&
  isAfterDay(date, aDate) &&
  isBeforeDay(date, bDate);

export const isSameDay = (aDate, bDate) => !!bDate && dateFnsIsSameDay(aDate, bDate);
export const isSameMonth = (aDate, bDate) => !!bDate && dateFnsIsSameMonth(aDate, bDate);

export const isSameOrAfterMonth = (aDate, bDate) =>
  !!bDate && (isSameMonth(aDate, bDate) || isAfter(
    endOfMonth(aDate),
    endOfMonth(bDate),
  ));

export const isSameOrBeforeMonth = (aDate, bDate) =>
  !!bDate && (isSameMonth(aDate, bDate) || isBefore(
    endOfMonth(aDate),
    endOfMonth(bDate),
  ));

export const isOneOfDays = (date, dates) => dates.some((bDate) => isSameDay(date, bDate));

export const orderDates = (aDate, bDate) =>
  isAfterDay(aDate, bDate)
    ? [bDate, aDate]
    : [aDate, bDate];
