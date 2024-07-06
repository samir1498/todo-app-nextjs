import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return Response.json({ todos });
}

export async function POST(request: Request) {
  const res = await request.json();

  const todo = await prisma.todo.create({
    data: {
      title: res.title,
      description: res.description,
    },
  });
  return Response.json({ todo });
}
