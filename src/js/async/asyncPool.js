/**
 * Run async tasks with a concurrency limit.
 *
 * Example:
 *   const urls = ["a","b","c"];
 *   const fetcher = (u) => Promise.resolve(`done:${u}`);
 *   const res = await asyncPool(urls, 2, fetcher);
 *   // ["done:a","done:b","done:c"]
 *
 * Example with error:
 *   const urls = ["a","b"];
 *   const fetcher = (u) => u === "a" ? Promise.reject("fail") : Promise.resolve("ok");
 *   const res = await asyncPool(urls, 2, fetcher);
 *   // ["fail","ok"]
 */

export async function asyncPool(urls, limit, fetcher) {
  const result = [];
  try {
    for (let i = 0; i < Math.ceil(urls.length / limit); i++) {
      const start = i * limit;
      const end = start + limit;
      const batch = urls.slice(start, end);
      const promisesResults = await Promise.allSettled(batch.map(fetcher));
      result.push(
        ...promisesResults.map((promise) => {
          return promise.status === "fulfilled"
            ? promise.value
            : promise.reason;
        }),
      );
    }
  } catch (e) {
    throw Error("Fetch error. " + e);
  }
  return result;
}
