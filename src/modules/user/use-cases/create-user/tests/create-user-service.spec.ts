import { IUserRepository } from '@/modules/user/infra/repositories/i-user-repository'
import { InMemoryUserRepository } from '@/modules/user/infra/repositories/in-memory-user-repository'

import { CreateUserService } from '@/modules/user/use-cases/create-user/create-user-service'

describe('create-user-service', () => {
  let userRepository: IUserRepository
  let createUserService: CreateUserService

  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    createUserService = new CreateUserService(userRepository)
  })

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    })

    expect(user.name).toBe('John Doe')
    expect(user.email).toBe('john.doe@example.com')
  })
})
