import { selector } from "recoil";
import { todosAtom } from "../atoms/todosAtom";

export const taskStatsSelector = selector({
  key: "taskStatsSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const done = todos.filter((t) => t.done).length;
    const total = todos.length;
    return { total, done, pending: total - done };
  },
});
