import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: (crypto.randomUUID && crypto.randomUUID()) || Date.now(),
      text,
      done: false,
    };
    setTodos([newTodo, ...todos]);
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  const remaining = todos.filter(t => !t.done).length;

  return (
    <div className="app">
      <h1>React Todo</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList items={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <p className="footer">{remaining} task{remaining !== 1 ? "s" : ""} left</p>
    </div>
  );
}
