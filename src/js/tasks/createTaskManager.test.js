import { createTaskManager } from "./createTaskManager.js";

test("creates, edits and removes", async () => {
  const taskManager = createTaskManager();
  expect(taskManager("add", "Buy products")).toEqual([
    { title: "Buy products", done: false },
  ]);
  expect(taskManager("add", "Finish homework")).toEqual([
    { title: "Buy products", done: false },
    { title: "Finish homework", done: false },
  ]);

  taskManager("done", 0);
  expect(taskManager("done", 0)).toEqual([
    { title: "Buy products", done: true },
    { title: "Finish homework", done: false },
  ]);

  expect(taskManager("remove", 1)).toEqual([
    { title: "Buy products", done: true },
  ]);
});
