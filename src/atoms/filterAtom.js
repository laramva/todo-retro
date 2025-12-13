import { atom } from "recoil";

export const filterAtom = atom({
  key: "filterAtom",
  default: {
    status: "all",      // all | pending | done
    priority: "all",    // all | low | medium | high
  },
});
