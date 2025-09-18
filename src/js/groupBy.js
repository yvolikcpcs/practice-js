/**
 * Groups an array of objects by a given property.
 *
 * @param {Object[]} array - input array of objects
 * @param {string} prop - property name to group by
 * @returns {Object|null} an object with keys = prop values, values = arrays of objects
 *
 * Example:
 *   groupBy(users, 'country')
 *   // {
 *   //   Germany: [ {..}, {..} ],
 *   //   Ukraine: [ {..} ]
 *   // }
 */
export function groupBy(array, prop) {
  if (!array?.length || !prop) {
    return null;
  }
  const result = {};
  array.forEach((element) => {
    const existing = result[element[prop]] || [];
    result[element[prop]] = [...existing, element];
  });
  return result;
}
