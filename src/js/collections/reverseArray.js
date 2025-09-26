/**
 * Reverses an array in place (without creating a new array).
 * @param {Array<any>} arr - The input array.
 * @returns {Array<any>} The same array, reversed in place.
 *
 * Example:
 * reverseArray([1, 2, 3]) -> [3, 2, 1]
 */
export function reverseArray(arr) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
    j--;
  }
  return arr;
}
