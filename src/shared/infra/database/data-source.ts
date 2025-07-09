import { DataSource } from 'typeorm'
import 'dotenv/config'

import { User } from '@/modules/user/entities/user'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: ['src/shared/database/migrations/*.ts'],
  synchronize: false,
})

export default AppDataSource
