import { topNFrequent } from "./topNFrequent";

describe("topNFrequent", () => {
  test("finds top 2 frequent numbers", () => {
    expect(topNFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test("finds top 1 frequent string", () => {
    expect(
      topNFrequent(
        ["apple", "banana", "apple", "orange", "banana", "apple"],
        1,
      ),
    ).toEqual(["apple"]);
  });

  test("handles array with all identical values", () => {
    expect(topNFrequent([5, 5, 5, 5], 3)).toEqual([5]);
  });

  test("handles n larger than unique count", () => {
    expect(topNFrequent([1, 2, 2, 3], 10)).toEqual([2, 1, 3]);
  });

  test("handles empty array", () => {
    expect(topNFrequent([], 2)).toEqual([]);
  });

  test("returns elements sorted by frequency descending", () => {
    expect(topNFrequent([1, 2, 2, 3, 3, 3], 2)).toEqual([3, 2]);
  });
});
