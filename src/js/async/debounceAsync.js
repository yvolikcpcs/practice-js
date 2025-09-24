/**
 * Creates a debounced version of an async function.
 *
 * Rules:
 *  - Returned function delays invocation until after `delay` ms have passed
 *    since the last time it was called.
 *  - If called again within the delay, the previous timer is reset.
 *  - Should return a Promise that resolves/rejects with the result/error of the
 *    most recent invocation of the original async function.
 *  - Useful for limiting API calls, search suggestions, etc.
 *
 * @param {Function} fn - The async function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced async function
 */
export function debounceAsync(fn, delay) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(async () => {
        try {
          resolve(await fn(...args));
        } catch (e) {
          reject(e);
        }
      }, delay);
    });
  };
}
