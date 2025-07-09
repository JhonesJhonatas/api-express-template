import { User } from '@/modules/user/entities/user'

import { IUserRepository } from '@/modules/user/infra/repositories/i-user-repository'
import {
  CreateUserProps,
  CreateUserResponse,
} from '@/modules/user/infra/repositories/domain'

class UserRepository implements IUserRepository {
  async create(props: CreateUserProps): Promise<CreateUserResponse> {
    const user = new User()

    user.name = props.name
    user.email = props.email
    user.password = props.password

    return Promise.resolve(user)
  }
}

export { UserRepository }
