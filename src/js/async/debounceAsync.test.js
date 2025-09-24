import { debounceAsync } from "./debounceAsync";

describe("debounceAsync (simple last-call-only)", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("calls the function after the specified delay with given args", async () => {
    const fn = jest.fn().mockResolvedValue("done");
    const debounced = debounceAsync(fn, 500);

    const promise = debounced("a");
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);

    await expect(promise).resolves.toBe("done");
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("a");
  });

  test("resets the timer; only the last call runs and receives its args", async () => {
    const fn = jest.fn().mockResolvedValue("ok");
    const debounced = debounceAsync(fn, 300);

    // First call won't matter, only the last one should execute
    debounced("first");
    jest.advanceTimersByTime(200);

    const lastPromise = debounced("second");
    jest.advanceTimersByTime(300);

    await expect(lastPromise).resolves.toBe("ok");
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("second");
  });

  test("propagates errors from the async function and preserves args", async () => {
    const fn = jest.fn().mockRejectedValue(new Error("fail"));
    const debounced = debounceAsync(fn, 100);

    const promise = debounced("x");
    jest.advanceTimersByTime(100);

    await expect(promise).rejects.toThrow("fail");
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("x");
  });

  test("executes once with the latest arguments when called multiple times quickly", async () => {
    const fn = jest.fn().mockResolvedValue("result");
    const debounced = debounceAsync(fn, 200);

    debounced("one");
    debounced("two");
    const lastCall = debounced("three");

    jest.advanceTimersByTime(200);

    await expect(lastCall).resolves.toBe("result");
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("three");
  });
});
