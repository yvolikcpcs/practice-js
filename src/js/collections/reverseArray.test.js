import { reverseArray } from "./reverseArray";

describe("reverseArray", () => {
  test("reverses a numeric array", () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  test("reverses a string array", () => {
    expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
  });

  test("handles single-element array", () => {
    expect(reverseArray([10])).toEqual([10]);
  });

  test("handles empty array", () => {
    expect(reverseArray([])).toEqual([]);
  });

  test("works with mixed data types", () => {
    expect(reverseArray([1, "a", true, null])).toEqual([null, true, "a", 1]);
  });

  test("modifies the array in place", () => {
    const arr = [1, 2, 3];
    const result = reverseArray(arr);
    expect(result).toBe(arr);
  });
});
