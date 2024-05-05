import { selector } from "recoil";
import { TodoAtom } from "./TodoAtom";
import { todoFilter } from "./TodoFiler";

export const filteredItem = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(TodoAtom);
    const filter = get(todoFilter);
    return todos.filter((todo) => todo.category === filter);
  },
});
