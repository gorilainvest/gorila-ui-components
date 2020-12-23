/**
 * An array compound of values:
 * - 1
 * - 10
 * - 100
 * - 1000
 * - 10000
 * - 100000
 * - 1000000
 * - 10000000
 * - 100000000
 * - 1000000000
 * - 10000000000
 * - 100000000000
 */
const Nx10a = Array.from({ length: 12 }, (_, key) => Math.pow(10, key));

/**
 * Given a number, trim it based in some factor of 10^9 or 10^6.
 *
 * @param value The number to be trimmed
 */
export function formatNumber(value: number): number {
  let factor = 1;

  const absValue = Math.abs(value);

  if (Nx10a[9] <= absValue) {
    factor = Nx10a[9];
  } else if (Nx10a[6] <= absValue) {
    factor = Nx10a[6];
  }

  return value / factor;
}

/**
 * Given a number, return a suffix for it if needed.
 *
 * @param value The number to be evaluated
 */
export function getSuffix(value: number): string {
  value = Math.abs(value);

  if (Nx10a[9] <= value) { return 'Bi'; }
  if (Nx10a[6] <= value) { return 'Mi'; }
  return '';
}

/**
 * Indicates how many decimal places a number of length X must have.
 */
const mapNumber = {
  6: 3,
  7: 2,
  8: 1,
  9: 3,
  10: 2,
  11: 1
};

/**
 * Returns how many decimal places a given number must have when sufixed.
 * Default value is of 2 decimal places.
 *
 * @param value The number to be evaluated
 */
export function maxDecimals(value: number): number {
  value = Math.round(Math.abs(value));
  let k = value.toString().length - 1;
  while (mapNumber[k] == null && k > 0) {
    k--;
  }
  return mapNumber[k] || 2;
}

/**
 * Get digits string in numbers pipe format of Angular.
 */
export function getDigits(value: number): string {
  const places = maxDecimals(value);

  return '1.' + places + '-' + places;
}

/**
 * Verify if a variable is a number
 *
 * @param string a variable to be checked
 * @returns boolean true if is number, false otherwise
 */
export function isNumber(num: any): boolean {
  return !isNaN(num) && (!!(num || num === 0));
}
