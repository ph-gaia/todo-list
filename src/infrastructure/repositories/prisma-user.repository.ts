import { PrismaClient } from '@prisma/client'
import { UserRepository, CreateUserInput } from '../../domain/repositories/user.repository'

const prisma = new PrismaClient()

export class PrismaUserRepository implements UserRepository {
  async create(data: CreateUserInput) {
    return prisma.user.create({ data })
  }
}
