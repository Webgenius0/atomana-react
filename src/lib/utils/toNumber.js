export const toNumber = (numString) => {
  return Number((numString || '').replace(/,/g, ''));
};
