/**
 * Checks if a string has balanced brackets.
 *
 * Rules:
 *  - Allowed bracket types: (), {}, [].
 *  - Every opening bracket must have a matching closing bracket
 *    in the correct order.
 *  - Return true if balanced, false otherwise.
 *
 * @param {string} str - Input string containing brackets
 * @returns {boolean} - Whether the brackets are balanced
 */
export function isBalanced(str) {
  const open = new Set(["(", "{", "["]);
  const match = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  const stack = [];

  for (const ch of str) {
    if (open.has(ch)) {
      stack.push(ch);
    } else if (match.has(ch)) {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (top !== match.get(ch)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
