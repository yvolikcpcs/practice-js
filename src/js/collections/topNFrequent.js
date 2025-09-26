/**
 * Returns the top N most frequent elements in an array.
 * If there are fewer unique elements than N, returns all unique elements.
 * Preserves element types (numbers stay numbers, strings stay strings).
 * @param {Array<string|number>} arr - The input array of strings or numbers.
 * @param {number} n - Number of top frequent elements to return.
 * @returns {Array<string|number>} An array of the most frequent elements, sorted by frequency (desc).
 *
 * Example:
 * topNFrequent([1,1,1,2,2,3], 2) -> [1, 2]
 */
export function topNFrequent(arr, n) {
  if (!Array.isArray(arr) || n <= 0 || arr.length === 0) {
    return [];
  }

  // Count frequencies using Map to preserve original types as keys
  const freq = new Map();
  for (const el of arr) {
    freq.set(el, (freq.get(el) || 0) + 1);
  }

  const sorted = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);
  // Take top-N and return only the element keys
  return sorted.slice(0, n).map(([el]) => el);
}
