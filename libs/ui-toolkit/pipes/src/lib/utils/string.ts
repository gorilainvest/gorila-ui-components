/**
 * Check if a string is blank or not.
 *
 * A string is considered to be blank iff is a falsy value or is empty after
 * trimmed.
 *
 * @param {string} a string to be evaluated
 * @returns {boolean} true if string is blank, otherwises false.
 * @see isEmpty
 */
export function isBlank(str: string): boolean {
  return !str || isEmpty(str.trim());
}

/**
 * Check if a string is empty or not.
 *
 * A string is considered to be empty iff have length equal to 0.
 *
 * @param {string} a string to be evaluated
 * @returns {boolean} true if string is empty, otherwises false.
 */
export function isEmpty(str: string): boolean {
  return str !== null
    && str !== undefined
    && typeof str === "string"
    && str.length === "".length;
}
