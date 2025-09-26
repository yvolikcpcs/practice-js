/**
 * Checks whether a string is a palindrome.
 *
 * Rules:
 *  - Ignore case (case-insensitive).
 *  - Ignore spaces and punctuation.
 *  - Return true if the string reads the same forward and backward,
 *    false otherwise.
 *
 * @param {string} str - Input string
 * @returns {boolean} - Whether the string is a palindrome
 */
export function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}
