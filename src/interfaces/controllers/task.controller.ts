import { Context } from "hono";
import { CreateTaskUseCase } from "../../../src/application/use-cases/create-task.use-case";
import { ListTasksUseCase } from "../../../src/application/use-cases/list-tasks.use-case";
import { PrismaTaskRepository } from "../../../src/infrastructure/repositories/prisma-task.repository";

export class TaskController {
  async listTasks(c: Context) {
    const repository = new PrismaTaskRepository()
    const useCase = new ListTasksUseCase(repository)

    const userId = c.req.query("userId")

    if (!userId) return c.json({ error: "Missing userId" }, 400)

    try {
      const tasks = await useCase.execute(userId)
      return c.json(tasks, 200)
    } catch (err: any) {
      return c.json({ error: err.message || 'Unexpected error' }, 500)
    }
  }

  async createTask(c: Context) {
    const body = await c.req.json()
    const repository = new PrismaTaskRepository()
    const useCase = new CreateTaskUseCase(repository)

    try {
      const task = await useCase.execute(body)
      return c.json(task, 201)
    } catch (err: any) {
      return c.json({ error: err.message || 'Unexpected error' }, 500)
    }
  }
}
