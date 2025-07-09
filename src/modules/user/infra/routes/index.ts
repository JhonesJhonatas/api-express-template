import { Router } from 'express'

import { createUserValidation } from '@/modules/user/use-cases/create-user/create-user-validation'
import { CreateUserController } from '@/modules/user/use-cases/create-user/create-user-controller'

const userRoutes = Router()

userRoutes.post(
  '/create',
  createUserValidation,
  new CreateUserController().handle,
)

export { userRoutes }
