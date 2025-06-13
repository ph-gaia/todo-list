import { TaskRepository } from "../../domain/repositories/task.repository"

export class ListTasksUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(userId: string) {
    return this.taskRepository.listByUserId(userId)
  }
}
