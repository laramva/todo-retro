import { selector } from "recoil";
import { tasksAtom } from "../atoms/tasksAtom";
import { filterAtom } from "../atoms/filterAtom";

export const filteredTasksSelector = selector({
  key: "filteredTasksSelector",
  get: ({ get }) => {
    const tasks = get(tasksAtom);
    const { status, priority } = get(filterAtom);

    return tasks.filter((t) => {
      const statusOk =
        status === "all" ||
        (status === "active" && !t.completed) ||
        (status === "completed" && t.completed);

      const priorityOk = priority === "all" || t.priority === priority;

      return statusOk && priorityOk;
    });
  },
});
