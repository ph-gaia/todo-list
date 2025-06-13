import { TaskRepository, CreateTaskInput } from '../../domain/repositories/task.repository'

export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(data: CreateTaskInput) {
    return this.taskRepository.create(data)
  }
}
