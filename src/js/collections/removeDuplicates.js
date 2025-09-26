/**
 * Removes duplicate values from an array while preserving the order of elements.
 * @param {Array<number>} arr - The input array of numbers.
 * @returns {Array<number>} A new array without duplicate values.
 *
 * Example:
 * removeDuplicates([1, 2, 2, 3]) -> [1, 2, 3]
 */
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}
