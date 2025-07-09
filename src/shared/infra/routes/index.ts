import { Router } from 'express'

import { userRoutes } from '@/modules/user/infra/routes'

const routes = Router()

routes.use('/user', userRoutes)

export { routes }
