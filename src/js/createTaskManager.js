/**
 * Creates a task manager with basic operations.
 *
 * @param {string} action - one of "add" | "done" | "remove" | "list"
 * @param {string|number} [payload] - for "add" = title of task, for "done"/"remove" = index
 * @returns {Array<{title: string, done: boolean}>} current list of tasks
 */
export function createTaskManager() {
  const tasks = [];
  return (action, payload) => {
    switch (action) {
      case "add":
        tasks.push({ title: payload, done: false });
        break;
      case "done":
        if (tasks[payload]) {
          tasks[payload].done = true;
        }
        break;
      case "remove":
        if (tasks[payload]) {
          tasks.splice(payload, 1);
        }
        break;
      case "list":
      default:
        return tasks;
    }
    return tasks;
  };
}
