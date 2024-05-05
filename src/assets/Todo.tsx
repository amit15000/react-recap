import { useEffect } from "react"; // Import useEffect
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TodoAtom } from "../store/atoms/TodoAtom";
import { filteredItem } from "../store/atoms/FilteredTodos";

/**
 * Todo component that displays a list of todos.
 *
 * @returns A React component that renders a list of todos.
 */
function Todo(): JSX.Element {
  const todos = useRecoilValue(TodoAtom); // Get the current todos from the Recoil state
  const setTodos = useSetRecoilState(TodoAtom); // Get the setter function for the TodoAtom state

  const todoItems = [
    {
      title: "asdsadasd",
      category: "Gym",
      desc: "asdsadsad",
    },
    {
      title: "khjk",
      category: "Food",
      desc: "gjhk",
    },
    {
      title: "ghjkghj",
      category: "Gym",
      desc: "hgfn",
    },
  ]; // Sample todo items

  /**
   * Sets the initial todos when the component mounts.
   *
   * @param todoItems - The initial todos to be set.
   */
  useEffect(() => {
    setTimeout(() => {
      setTodos(todoItems);
    }, 3000);
  }, []); // Empty dependency array to mimic componentDidMount behavior

  const selectedTodos = useRecoilValue(filteredItem);

  return (
    <div>
      {/* {todos.map((todo, index) => (
        <div key={index}>
          <p>Title: {todo.title}</p>
          <p>Category: {todo.category}</p>
          <p>Description: {todo.desc}</p>
        </div>
      ))} */}

      {/* {todos
        .filter((todo) => todo.category === "Gym") // Filter todos where category is "Gym"
        .map(
          (
            todo,
            index // Map over filtered todos
          ) => (
            <div key={index}>
              <p>Title: {todo.title}</p>
              <p>Category: {todo.category}</p>
              <p>Description: {todo.desc}</p>
            </div>
          )
        )} */}
      {/* 
      {todos
        .filter((todo) => todo.category === "Gym")
        .map((todo, index) => (
          <div key={index}>
            <p>Title : {todo.title}</p>
          </div>
        ))} */}

      {todos.map((todo, index) => (
        <div key={index}>
          <p>Title :{todo.title}</p>
          <p>category :{todo.category}</p>
        </div>
      ))}
      <div>Filtered Categories</div>
      {selectedTodos.map((todo, index) => (
        <div key={index}>
          <p>Title : {todo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Todo;
