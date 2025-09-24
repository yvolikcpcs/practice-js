import { countWords } from "./countWords.js";

const cases = [
  {
    provided: "Hello, hello world! Hello?",
    expected: { hello: 3, world: 1 },
  },
  {
    provided: "  JavaScript   is  GREAT, javascript IS fun!!!  ",
    expected: { javascript: 2, is: 2, great: 1, fun: 1 },
  },
  {
    provided: "!!! ,,, ??? ::: ;;;",
    expected: {},
  },
  {
    provided: "Test 123 test, 123! test.",
    expected: { test: 3, 123: 2 },
  },
  {
    provided: "This is a test. This test is only a test!",
    expected: { this: 2, is: 2, a: 2, test: 3, only: 1 },
  },
  {
    provided: "",
    expected: {},
  },
];

describe("countWords", () => {
  test.each(cases)(
    "should return $expected from $provided",
    ({ provided, expected }) => {
      const result = countWords(provided);
      expect(result).toEqual(expected);
    },
  );
});
