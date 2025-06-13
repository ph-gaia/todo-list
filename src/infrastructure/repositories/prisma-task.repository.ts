import { PrismaClient } from "@prisma/client"
import { CreateTaskInput, TaskRepository } from "../../domain/repositories/task.repository"

const prisma = new PrismaClient()

export class PrismaTaskRepository implements TaskRepository {
  async create(data: CreateTaskInput) {
    return prisma.task.create({ data })
  }

  async listByUserId(userId: string) {
    return await prisma.task.findMany({
      where: { user_id: userId },
      orderBy: { createdAt: "desc" },
    })
  }
}
