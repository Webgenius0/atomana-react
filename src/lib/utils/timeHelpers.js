export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getCurrentMonth() {
  return months[new Date().getMonth()];
}

export function getCurrentQuarter() {
  const month = new Date().getMonth(); // Get current month (0-11)

  if (month < 3) return 'Q1'; // Jan, Feb, Mar
  if (month < 6) return 'Q2'; // Apr, May, Jun
  if (month < 9) return 'Q3'; // Jul, Aug, Sep
  return 'Q4'; // Oct, Nov, Dec
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
