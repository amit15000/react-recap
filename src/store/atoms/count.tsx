import { atom } from "recoil";

export const countAtom = atom({
  key: "countKey",
  default: 0,
});
