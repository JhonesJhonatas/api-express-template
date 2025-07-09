import 'reflect-metadata'

import express from 'express'
import 'dotenv/config'

import { routes } from '@/shared/infra/routes'
import { AppDataSource } from '@/shared/infra/database/data-source'

const PORT = process.env.PORT || 3333

const app = express()

app.use(express.json())
app.use(routes)

app.listen(PORT, async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log('📦 - Database connected')
    })
    .catch((error) => {
      console.log('❌ - Error connecting to database', error)
    })

  console.log(`⚡ - Server is running on port ${PORT}`)
})

export default app
