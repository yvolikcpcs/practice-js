import { flatten } from "./flatten";

describe("flatten", () => {
  it("flattens fully nested array by default", () => {
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  it("respects depth = 1", () => {
    expect(flatten([1, [2, [3, [4]]]], 1)).toEqual([1, 2, [3, [4]]]);
  });

  it("respects depth = 2", () => {
    expect(flatten([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
  });

  it("returns [] for empty input", () => {
    expect(flatten([])).toEqual([]);
  });

  it("handles non-array items", () => {
    expect(flatten([1, "a", [2, "b"]])).toEqual([1, "a", 2, "b"]);
  });
});
