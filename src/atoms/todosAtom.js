import { atom } from "recoil";

const STORAGE_KEY = "todo-retro.todos.v1";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const saved = localStorage.getItem(key);
    if (saved != null) {
      try {
        setSelf(JSON.parse(saved));
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
