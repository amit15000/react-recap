import axios from "axios";
import { useEffect, useState } from "react";

const CustomHook = () => {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setRender((r) => !r);
    }, 5000);
  }, []);
  return <div>{render ? <MountComponet /> : <div>Empty</div>}</div>;
};

export const MountComponet = () => {
  interface Todo {
    id: number;
    title: string;
    description: string;
  }
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosRes = await axios.get<Todo[]>("http://localhost:4000/todos");
      setTodos(todosRes.data);
    };
    fetchTodos();
    console.log("Mount Rendered");
    return () => {
      console.log("Mount Un-rendered");
    };
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>id : {todo.id}</div>
          <div>title : {todo.title}</div>
          <div>desc : {todo.description}</div>
        </div>
      ))}
    </div>
  );
};

export default CustomHook;
