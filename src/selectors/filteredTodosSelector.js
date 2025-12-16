import { selector } from "recoil";
import { todosAtom } from "../atoms/todosAtom";
import { filterAtom } from "../atoms/filterAtom";

export const filteredTodosSelector = selector({
  key: "filteredTodosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const { status, priority } = get(filterAtom);

    return todos.filter((t) => {
      const okStatus =
        status === "all" ||
        (status === "pending" && !t.completed) ||
        (status === "completed" && t.completed);

      const okPriority = priority === "all" || t.priority === priority;

      return okStatus && okPriority;
    });
  },
});
