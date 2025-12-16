import { selector } from "recoil";
import { todosAtom } from "../atoms/todosAtom";

export const taskStatsSelector = selector({
  key: "taskStatsSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const completed = todos.filter((t) => t.completed).length;
    const total = todos.length;

    return { total, completed, pending: total - completed };
  },
});
