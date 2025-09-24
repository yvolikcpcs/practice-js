/**
 * Creates a throttled version of a function (can be async or sync).
 *
 * Rules:
 *  - Ensures the function is only called at most once every `delay` ms.
 *  - The first call executes immediately (leading edge).
 *  - Subsequent calls within the delay are ignored.
 *  - Returns a Promise that resolves/rejects with the result/error of the executed call.
 *
 * @param {Function} fn - The function to throttle
 * @param {number} delay - Minimum time interval between calls (ms)
 * @returns {Function} - Throttled function
 */
export function throttle(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date();
    if (now - lastCall >= delay) {
      lastCall = now;
      return Promise.resolve(fn(...args));
    }
    return Promise.resolve(undefined);
  };
}
