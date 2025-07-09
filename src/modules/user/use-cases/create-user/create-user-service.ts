import { CreateUserDTO } from '@/modules/user/use-cases/create-user/dtos/create-user-dto'
import { CreateUserResponseDTO } from '@/modules/user/use-cases/create-user/dtos/create-user-response-dto'

import { IUserRepository } from '@/modules/user/infra/repositories/i-user-repository'
import { inject, injectable } from 'tsyringe'

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(data: CreateUserDTO): Promise<CreateUserResponseDTO> {
    const user = await this.userRepository.create(data)

    return user
  }
}

export { CreateUserService }
