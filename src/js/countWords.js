/**
 * Counts word occurrences in a string (case-insensitive).
 * @param {string} str - The input string
 * @returns {Record<string, number>} An object where keys are words and values are their counts
 */
export function countWords(str) {
  if (!str) {
    return {};
  }
  return str
    .replace(/[.,!?:;]/g, "")
    .split(/\s+/)
    .reduce((total, current) => {
      if (!current) {
        return total;
      }
      const word = current.toLowerCase();
      total[word] = (total[word] || 0) + 1;
      return total;
    }, {});
}
