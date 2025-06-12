import { Context } from 'hono'
import { CreateUserUseCase } from '../../../src/application/use-cases/create-user.use-case'
import { PrismaUserRepository } from '../../../src/infrastructure/repositories/prisma-user.repository'

export class UserController {
  async createUser(c: Context) {
    const body = await c.req.json()

    const repository = new PrismaUserRepository()
    const useCase = new CreateUserUseCase(repository)

    try {
      const user = await useCase.execute(body)
      return c.json(user, 201)
    } catch (err: any) {
      return c.json({ error: err.message || 'Unexpected error' }, 500)
    }
  }
}
