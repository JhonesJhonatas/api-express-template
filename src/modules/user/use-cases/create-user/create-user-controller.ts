import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUserDTO } from '@/modules/user/use-cases/create-user/dtos/create-user-dto'
import { CreateUserService } from '@/modules/user/use-cases/create-user/create-user-service'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body as CreateUserDTO

    const createUserService = container.resolve(CreateUserService)

    const user = await createUserService.execute({ name, email, password })

    return res.json(user)
  }
}

export { CreateUserController }
