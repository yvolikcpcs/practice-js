import { retry } from "./retry";

// helper: fails k times, then resolves with value
function failKThenSucceed(k, value = "ok") {
  let n = 0;
  return jest.fn(async () => {
    if (n < k) {
      n++;
      throw new Error(`boom ${n}`);
    }
    return value;
  });
}

describe("retry (simple)", () => {
  test("succeeds on the first attempt", async () => {
    const op = jest.fn().mockResolvedValue("ok");

    const res = await retry(op, 3, 10);

    expect(res).toBe("ok");
    expect(op).toHaveBeenCalledTimes(1);
  });

  test("succeeds on the second attempt after one failure", async () => {
    const op = failKThenSucceed(1, "ok");

    const res = await retry(op, 3, 1);

    expect(res).toBe("ok");
    expect(op).toHaveBeenCalledTimes(2); // 1 fail + 1 success
  });

  test("fails after exhausting retries", async () => {
    const op = failKThenSucceed(5); // needs 6th attempt, but we give less

    await expect(retry(op, 2, 1)).rejects.toThrow("boom 3");
    // 1 initial + 2 retries = 3 calls
    expect(op).toHaveBeenCalledTimes(3);
  });

  test("when retries=0: only one attempt", async () => {
    const op = failKThenSucceed(1);

    await expect(retry(op, 0, 100)).rejects.toThrow("boom 1");
    expect(op).toHaveBeenCalledTimes(1);
  });

  test("throws the original error object", async () => {
    const original = new Error("fatal");
    const op = jest.fn().mockRejectedValue(original);

    await expect(retry(op, 0, 50)).rejects.toBe(original);
    expect(op).toHaveBeenCalledTimes(1);
  });
});
