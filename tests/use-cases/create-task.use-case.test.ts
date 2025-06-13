import { describe, it, expect } from 'vitest'
import { CreateTaskUseCase } from '../../src/application/use-cases/create-task.use-case'

describe('CreateTaskUseCase', () => {
  it('should create a new task with title and description', async () => {
    const fakeRepo = {
      create: async ({ title, description, userId }: any) => ({
        id: 'fake-id',
        title,
        description,
        userId,
        createdAt: new Date()
      })
    }

    const useCase = new CreateTaskUseCase(fakeRepo as any)
    const result = await useCase.execute({ title: 'Task 1', description: 'Task 1 description', userId: '1' })

    expect(result).toHaveProperty('id')
    expect(result.title).toBe('Task 1')
    expect(result.description).toBe('Task 1 description')
  })
})
