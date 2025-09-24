import { throttle } from "./throttle";

describe("throttle", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("executes immediately on the first call", async () => {
    const fn = jest.fn().mockResolvedValue("first");
    const throttled = throttle(fn, 500);

    const promise = throttled("a");

    await expect(promise).resolves.toBe("first");
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("a");
  });

  test("ignores calls within the delay window", async () => {
    const fn = jest.fn().mockResolvedValue("val");
    const throttled = throttle(fn, 300);

    const first = throttled("x");
    const second = throttled("y"); // should be ignored

    await expect(first).resolves.toBe("val");
    await expect(second).resolves.toBe(undefined); // ignored calls resolve undefined

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("x");
  });

  test("allows a new call after the delay has passed", async () => {
    const fn = jest.fn().mockResolvedValue("ok");
    const throttled = throttle(fn, 400);

    const first = throttled("a");
    jest.advanceTimersByTime(400);

    const second = throttled("b");

    await expect(first).resolves.toBe("ok");
    await expect(second).resolves.toBe("ok");

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith("a");
    expect(fn).toHaveBeenCalledWith("b");
  });

  test("propagates errors from the wrapped function", async () => {
    const fn = jest.fn().mockRejectedValue(new Error("fail"));
    const throttled = throttle(fn, 200);

    const promise = throttled("z");
    await expect(promise).rejects.toThrow("fail");
    expect(fn).toHaveBeenCalledWith("z");
  });
});
