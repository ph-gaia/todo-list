import { describe, it, expect } from 'vitest'
import { CreateUserUseCase } from '../../src/application/use-cases/create-user.use-case'

describe('CreateUserUseCase', () => {
  it('should create a new user with name and email', async () => {
    const fakeRepo = {
      create: async ({ name, email }: any) => ({
        id: 'fake-id',
        name,
        email,
        createdAt: new Date()
      })
    }

    const useCase = new CreateUserUseCase(fakeRepo as any)
    const result = await useCase.execute({ name: 'John', email: 'john@example.com' })

    expect(result).toHaveProperty('id')
    expect(result.name).toBe('John')
    expect(result.email).toBe('john@example.com')
  })
})
