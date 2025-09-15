/**
 * Flattens nested arrays up to the given depth.
 * @param {any[]} arr - input array
 * @param {number} depth - how deep to flatten (default: Infinity)
 * @returns {any[]} flattened array
 */
function flatten(arr, depth = Infinity) {
  if (!arr?.length) return [];
  if (depth === 0) return arr;
  return arr.reduce((result, current) => {
    const flat = Array.isArray(current)
      ? flatten(current, depth - 1)
      : current;
    return result.concat(flat);
  }, []);
}

module.exports = { flatten };
