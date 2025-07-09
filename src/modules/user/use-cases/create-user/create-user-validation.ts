import { celebrate, Joi } from 'celebrate'

const createUserValidation = celebrate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
})

export { createUserValidation }
