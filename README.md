# practice-js

A collection of small JavaScript functions with tests, designed to help practice and strengthen core JS skills.  
Each function solves a practical task (arrays, async, objects, etc.) and can be used as a reference or training exercise.  
Simple, focused, and useful for anyone who wants to get better at everyday JavaScript.

## Example

**asyncPool** – run async tasks with a concurrency limit:

```js
import { asyncPool } from "./src/js/asyncPool.js";

const urls = ["a", "b", "c"];
const fetcher = (u) => Promise.resolve(`done:${u}`);

asyncPool(urls, 2, fetcher).then(console.log);
// ["done:a", "done:b", "done:c"]