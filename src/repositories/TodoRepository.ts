// src/repositories/TodoRepository.ts
import { Todo } from "@/entity/Todo";
import { AppDataSource } from "../data-source";

export const TodoRepository = AppDataSource.getRepository(Todo);
