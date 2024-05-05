import { atom } from "recoil";

export const TodoAtom = atom({
  key: "todoAtom",
  default: [
    {
      title: "",
      category: "",
      desc: "",
    },
  ],
});
