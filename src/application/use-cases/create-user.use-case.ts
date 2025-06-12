import { UserRepository, CreateUserInput } from '../../domain/repositories/user.repository'

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserInput) {
    return this.userRepository.create(data)
  }
}
