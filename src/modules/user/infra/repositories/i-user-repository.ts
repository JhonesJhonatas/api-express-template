import {
  CreateUserProps,
  CreateUserResponse,
} from '@/modules/user/infra/repositories/domain'

abstract class IUserRepository {
  abstract create(props: CreateUserProps): Promise<CreateUserResponse>
}

export { IUserRepository }
