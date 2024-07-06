// src/services/TodoService.ts
import { Todo } from "@/entity/Todo";
import { TodoRepository } from "@/repositories/TodoRepository";

export const addTodo = async (data: Partial<Todo>): Promise<Partial<Todo>> => {
  const newTodo = await TodoRepository.save({ ...data });
  return newTodo;
};

export const getTodos = async (): Promise<Todo[]> => {
  return TodoRepository.find();
};
