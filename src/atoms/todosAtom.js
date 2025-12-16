import { atom } from "recoil";

const STORAGE_KEY = "todo-retro.todos.v1";

const normalizeTodos = (arr) => {
  if (!Array.isArray(arr)) return [];
  return arr.map((t) => {
    // migração: versões antigas podem ter "done" em vez de "completed"
    const completed =
      typeof t?.completed === "boolean"
        ? t.completed
        : typeof t?.done === "boolean"
        ? t.done
        : false;

    return {
      id: t?.id ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      text: String(t?.text ?? ""),
      priority: t?.priority ?? "medium",
      completed,
    };
  });
};

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const saved = localStorage.getItem(key);
    if (saved != null) {
      try {
        const parsed = JSON.parse(saved);
        setSelf(normalizeTodos(parsed));
      } catch {
        // ignore
      }
    }

    onSet((newValue, _, isReset) => {
      if (isReset) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const todosAtom = atom({
  key: "todosAtom",
  default: [],
  effects_UNSTABLE: [localStorageEffect(STORAGE_KEY)],
});
