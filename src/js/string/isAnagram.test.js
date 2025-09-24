import { isAnagram } from "./isAnagram";

describe("isAnagram", () => {
  test("returns true for simple anagrams", () => {
    expect(isAnagram("listen", "silent")).toBe(true);
    expect(isAnagram("apple", "papel")).toBe(true);
  });

  test("returns false for non-anagrams", () => {
    expect(isAnagram("apple", "peach")).toBe(false);
    expect(isAnagram("test", "ttew")).toBe(false);
  });

  test("ignores case differences", () => {
    expect(isAnagram("Listen", "Silent")).toBe(true);
    expect(isAnagram("ABC", "cab")).toBe(true);
  });

  test("ignores spaces and punctuation", () => {
    expect(isAnagram("Hello, World!", "dlroW ,olleH")).toBe(true);
    expect(isAnagram("Dormitory", "Dirty room!!")).toBe(true);
  });

  test("handles empty strings", () => {
    expect(isAnagram("", "")).toBe(true);
    expect(isAnagram(" ", " ")).toBe(true);
    expect(isAnagram("a", "")).toBe(false);
  });
});
