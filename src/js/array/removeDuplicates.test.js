import { removeDuplicates } from "./removeDuplicates.js";

describe("removeDuplicates", () => {
  test("removes duplicates and keeps order", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles array with all identical values", () => {
    expect(removeDuplicates([10, 10, 10])).toEqual([10]);
  });

  test("handles empty array", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  test("handles single-element array", () => {
    expect(removeDuplicates([7])).toEqual([7]);
  });

  test("handles duplicates in non-adjacent positions", () => {
    expect(removeDuplicates([1, 2, 3, 2, 1])).toEqual([1, 2, 3]);
  });
});
