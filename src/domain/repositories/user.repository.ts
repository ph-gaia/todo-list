export interface CreateUserInput {
  name: string
  email: string
}

export interface UserRepository {
  create(data: CreateUserInput): Promise<any>
}
