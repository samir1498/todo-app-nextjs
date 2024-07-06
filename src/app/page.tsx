// pages/index.tsx
"use client";
import { useState, useEffect } from "react";

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const fetchTodos = async () => {
    try {
      const response = await fetch("/api"); // Replace with your API route path
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
      // Handle error as needed
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) {
        throw new Error("Failed to add todo");
      }
      const data = await response.json();
      setTodos((prev) => [data.todo, ...prev]);
      setNewTodo({ title: "", description: "" });
    } catch (error) {
      console.error("Error adding todo:", error);
      // Handle error as needed
    }
  };

  return (
    <div className="p-4 flex h-screen flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Todos</h1>
      <form onSubmit={handleAddTodo} className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="p-2 border border-gray-300 mr-2 text-black"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="p-2 border border-gray-300 mr-2 text-black"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Add Todo
        </button>
      </form>
      <ul className="h-96 overflow-auto">
        {todos.map((todo) => (
          <li key={todo?.id} className="mb-2">
            <div className="font-semibold">{todo?.title}</div>
            <div className="text-gray-600">{todo?.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
