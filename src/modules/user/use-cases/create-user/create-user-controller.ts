import { Request, Response } from 'express'

class CreateUserController {
  async handle(req: Request, res: Response) {
    return res.json({ message: 'Hello World' })
  }
}

export { CreateUserController }
