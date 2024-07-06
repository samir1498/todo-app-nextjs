import { revalidatePath } from "next/cache";
import { addTodo } from "../services/TodoService";

export const createTodo = async (formData: FormData) => {
  "use server";
  const data = {
    title: formData.get("title")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
  };
  await addTodo(data);

  revalidatePath("/");
};
