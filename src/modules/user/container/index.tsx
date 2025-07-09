import { container } from 'tsyringe'

import { UserRepository } from '@/modules/user/infra/repositories/user-repository'
import { IUserRepository } from '@/modules/user/infra/repositories/i-user-repository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
