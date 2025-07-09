# API Express Template

A modern, scalable Node.js API template built with Express.js, TypeScript, and TypeORM. This template follows clean architecture principles and provides a solid foundation for building RESTful APIs.

## 🚀 Features

- **TypeScript** - Full TypeScript support with strict type checking
- **Express.js** - Fast, unopinionated web framework
- **TypeORM** - Object-Relational Mapping with PostgreSQL support
- **Clean Architecture** - Modular structure with separation of concerns
- **Dependency Injection** - Using TSyringe for IoC container
- **Docker Support** - PostgreSQL database with Docker Compose
- **ESLint** - Code linting with Rocketseat configuration
- **Path Mapping** - Clean imports with TypeScript path mapping
- **Validation** - Request validation with Celebrate
- **Hot Reload** - Development server with tsx for fast reloading

## 📁 Project Structure

```
src/
├── modules/                    # Feature modules
│   └── user/                  # User module example
│       ├── container/         # Dependency injection container
│       ├── entities/          # Domain entities
│       ├── infra/            # Infrastructure layer
│       │   ├── repositories/ # Data access layer
│       │   │   ├── domain/   # Repository interfaces and DTOs
│       │   │   └── ...       # Repository implementations
│       │   └── routes/       # HTTP routes
│       └── use-cases/        # Business logic
│           └── create-user/   # Create user use case
│               ├── dtos/      # Data transfer objects
│               └── tests/     # Unit tests
└── shared/                   # Shared components
    ├── container/            # Global DI container
    ├── database/            # Database configuration and migrations
    │   └── migrations/      # TypeORM migrations
    └── infra/               # Shared infrastructure
        ├── middlewares/     # Express middlewares
        ├── routes/          # Main router
        └── server/          # Express server setup
```

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **DI Container**: TSyringe
- **Environment**: dotenv
- **Build Tool**: tsup
- **Development**: tsx (for hot reload)
- **Linting**: ESLint (Rocketseat config)
- **Validation**: Celebrate

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd api-express-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3333
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=api-express-template-user
   DB_PASSWORD=api-express-template-pass
   DB_NAME=api-express-template-db
   ```

4. **Start the database**
   ```bash
   docker-compose up -d
   ```

5. **Run database migrations**
   ```bash
   npm run migration:run
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3333`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload using tsx
- `npm run build` - Build the application for production using tsup
- `npm run migration:create` - Create a new migration file
- `npm run migration:run` - Run pending migrations
- `npm run migration:revert` - Revert the last migration

## 🏗️ Architecture

This template follows **Clean Architecture** principles with a modular structure:

### Layers

1. **Entities** - Domain models and business rules
2. **Use Cases** - Application business logic
3. **Controllers** - HTTP request/response handling
4. **Repositories** - Data access abstraction
5. **Infrastructure** - External concerns (database, HTTP, etc.)

### Module Structure

Each feature module follows this structure:
- `entities/` - Domain entities
- `use-cases/` - Business logic with DTOs and validation
- `infra/repositories/` - Data access implementations
- `infra/routes/` - HTTP route definitions
- `container/` - Dependency injection setup

## 🗄️ Database

The template uses PostgreSQL with TypeORM. The database configuration is in `src/shared/database/data-source.ts`.

### Current Entities

- **User** - Basic user entity with:
  - `id` (UUID, primary key)
  - `name` (string)
  - `email` (string)
  - `password` (string)
  - `createdAt` (timestamp)
  - `updatedAt` (timestamp)

### Available Endpoints

- `POST /user/create` - Create a new user

## 🔧 Configuration

### TypeScript Path Mapping

The project uses TypeScript path mapping for clean imports:
```typescript
import { User } from '@/modules/user/entities/user'
```

### Environment Variables

Required environment variables:
- `PORT` - Server port (default: 3333)
- `DB_HOST` - Database host
- `DB_PORT` - Database port
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name

## 🧪 Development

### Adding New Modules

1. Create a new module directory in `src/modules/`
2. Follow the existing structure with entities, use-cases, and infrastructure
3. Add routes to the main router in `src/shared/infra/routes/index.ts`
4. Set up dependency injection in the module's container

### Example: Creating a Product Module

```typescript
// src/modules/product/entities/product.ts
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar' })
  name!: string

  @Column({ type: 'decimal' })
  price!: number
}
```

## 📦 Docker

The project includes Docker Compose configuration for PostgreSQL:

```yaml
services:
  api-express-template-db:
    image: bitnami/postgresql:latest
    ports:
      - 5432:5432
    environment:
      - POSTGRESQL_USERNAME=api-express-template-user
      - POSTGRESQL_PASSWORD=api-express-template-pass
      - POSTGRESQL_DATABASE=api-express-template-db
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Jhones Jhonatas**
- Email: jhonesjhonatas@outlook.com.br
- GitHub: [@jhonesjhonatas](https://github.com/jhonesjhonatas)

---

Happy coding! 🎉