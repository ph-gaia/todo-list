export interface CreateTaskInput {
  title: string
  description: string
  userId: string
}

export interface TaskRepository {
  create(data: CreateTaskInput): Promise<any>
  listByUserId(userId: string): Promise<any[]>
}
