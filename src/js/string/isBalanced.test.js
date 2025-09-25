import { isBalanced } from "./isBalanced";

describe("isBalanced", () => {
  test("returns true for simple balanced brackets", () => {
    expect(isBalanced("()")).toBe(true);
    expect(isBalanced("[]")).toBe(true);
    expect(isBalanced("{}")).toBe(true);
  });

  test("returns true for nested balanced brackets", () => {
    expect(isBalanced("([]{})")).toBe(true);
    expect(isBalanced("{[()]}")).toBe(true);
    expect(isBalanced("((()))")).toBe(true);
  });

  test("returns false for incorrect order", () => {
    expect(isBalanced("(]")).toBe(false);
    expect(isBalanced("([)]")).toBe(false);
    expect(isBalanced("{[(])}")).toBe(false);
  });

  test("returns true for empty string", () => {
    expect(isBalanced("")).toBe(true);
  });

  test("handles strings with non-bracket characters", () => {
    expect(isBalanced("a(b[c]{d}e)f")).toBe(true);
    expect(isBalanced("a(b[c}d]e)f")).toBe(false);
  });
});
