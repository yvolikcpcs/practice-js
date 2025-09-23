import { resolve } from "path";

/**
 * Retries an async operation a given number of times before failing.
 *
 * @param {() => Promise<any>} operation - The async function to execute
 * @param {number} retries - Number of attempts before rejecting
 * @param {number} delay - Delay in ms between attempts
 * @returns {Promise<any>} Resolves with the result of operation or rejects after all retries
 *
 */
export async function retry(operation, retries, delay) {
  try {
    return await operation();
  } catch (e) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));

      return retry(operation, retries - 1, delay);
    } else {
      throw e;
    }
  }
}
