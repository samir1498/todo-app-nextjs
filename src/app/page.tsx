import { getTodos } from "@/services/TodoService";
import { createTodo } from "./actions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="p-4 flex h-screen flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Todos</h1>
      <form action={createTodo} className="mb-4">
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          className="p-2 border border-gray-300 mr-2 text-black"
        />
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          className="p-2 border border-gray-300 mr-2 text-black"
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
