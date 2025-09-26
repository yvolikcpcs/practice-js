import { isPalindrome } from "./isPalindrome";

describe("isPalindrome", () => {
  test("returns true for simple palindromes", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
  });

  test("ignores case and spaces", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(isPalindrome("No lemon no melon")).toBe(true);
  });

  test("ignores punctuation", () => {
    expect(isPalindrome("Able, was I, ere I saw Elba")).toBe(true);
  });

  test("returns false for non-palindromes", () => {
    expect(isPalindrome("Hello")).toBe(false);
    expect(isPalindrome("OpenAI")).toBe(false);
  });

  test("returns true for empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
});
