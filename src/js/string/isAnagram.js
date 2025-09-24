/**
 * Checks whether two strings are anagrams of each other.
 *
 * Rules:
 *  - Ignore letter case (case-insensitive).
 *  - Ignore spaces and punctuation.
 *  - Return true if the strings contain the same letters
 *    with the same frequency, otherwise false.
 *
 * @param {string} str1 - The first string
 * @param {string} str2 - The second string
 * @returns {boolean} - True if anagrams, false otherwise
 */
export function isAnagram(str1, str2) {
  const normalize = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  };
  return normalize(str1) === normalize(str2);
}
