import { User } from '@/modules/user/entities/user'

import {
  CreateUserProps,
  CreateUserResponse,
} from '@/modules/user/infra/repositories/domain'

import { IUserRepository } from '@/modules/user/infra/repositories/i-user-repository'

class InMemoryUserRepository implements IUserRepository {
  private users: User[] = []

  async create(props: CreateUserProps): Promise<CreateUserResponse> {
    const user = new User()

    user.name = props.name
    user.email = props.email
    user.password = props.password

    this.users.push(user)

    return Promise.resolve(user)
  }
}

export { InMemoryUserRepository }
