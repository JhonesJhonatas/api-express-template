import { Repository } from 'typeorm'

import AppDataSource from '@/shared/infra/database/data-source'

import { User } from '@/modules/user/entities/user'

import { IUserRepository } from '@/modules/user/infra/repositories/i-user-repository'
import {
  CreateUserProps,
  CreateUserResponse,
} from '@/modules/user/infra/repositories/domain'

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User)
  }

  async create(props: CreateUserProps): Promise<CreateUserResponse> {
    const user = this.ormRepository.create(props)

    await this.ormRepository.save(user)

    return user
  }
}

export { UserRepository }
