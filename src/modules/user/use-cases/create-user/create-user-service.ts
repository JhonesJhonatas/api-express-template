import { CreateUserDTO } from '@/modules/user/use-cases/create-user/dtos/create-user-dto'
import { CreateUserResponseDTO } from '@/modules/user/use-cases/create-user/dtos/create-user-response-dto'

class CreateUserService {
  async execute(data: CreateUserDTO): Promise<CreateUserResponseDTO> {
    return Promise.resolve({
      id: '1',
      name: data.name,
      email: data.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }
}

export { CreateUserService }
