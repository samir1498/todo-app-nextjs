import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const prisma = new PrismaClient();

export const addTodo = async (formData: FormData) => {
  "use server";
  console.log(formData);
  const data = {
    title: formData.get("title")?.toString() ?? "",
    description: formData.get("description")?.toString(),
  };
  console.log(data);
  const todo = await prisma.todo.create({ data });
  console.log("todo added");
  revalidatePath("/");
};
