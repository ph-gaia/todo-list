# Todo List Application

A modern, scalable Todo List application built with TypeScript, following clean architecture principles and best practices.

## 🏗️ Architecture

This project follows Clean Architecture principles, organizing the codebase into distinct layers:

- **Domain Layer** (`src/domain/`): Contains the core business logic and entities
- **Application Layer** (`src/application/`): Implements use cases and orchestrates the flow of data
- **Infrastructure Layer** (`src/infrastructure/`): Handles external concerns like databases and external services
- **Interface Layer** (`src/interfaces/`): Manages the API endpoints and request/response handling
- **Shared Layer** (`src/shared/`): Contains shared utilities, constants, and types

### Design Patterns

The project implements several design patterns:

- **Repository Pattern**: Abstracts data access logic
- **Dependency Injection**: For better testability and loose coupling
- **Factory Pattern**: For creating complex objects
- **Strategy Pattern**: For interchangeable algorithms
- **Adapter Pattern**: For integrating external services

## 🚀 Technologies

- **Runtime**: Node.js with TypeScript
- **Framework**: Hono (Lightweight, fast web framework)
- **Database**: PostgreSQL with Prisma ORM
- **Testing**: Vitest for unit and integration tests
- **Containerization**: Docker and Docker Compose
- **Code Quality**: ESLint and Prettier

## 🛠️ Infrastructure

The application is containerized using Docker, with the following services:

- **App Container**: Runs the Node.js application
- **PostgreSQL Container**: Database service
- **Volume**: Persistent storage for database data

### Docker Configuration

- `Dockerfile`: Defines the application container
- `docker-compose.yml`: Orchestrates the multi-container setup
- `docker-entrypoint.sh`: Handles container initialization

## 📦 Project Structure

```
todo-list/
├── src/
│   ├── domain/         # Business logic and entities
│   ├── application/    # Use cases and application logic
│   ├── infrastructure/ # External services and implementations
│   ├── interfaces/     # API endpoints and controllers
│   └── shared/         # Shared utilities and types
├── tests/              # Test files
├── prisma/            # Database schema and migrations
├── Dockerfile         # Application container definition
├── docker-compose.yml # Multi-container orchestration
└── package.json       # Project dependencies and scripts
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the application with Docker:
   ```bash
   docker-compose up
   ```

## 🧪 Testing

Run tests using:
```bash
npm test
```

For watch mode:
```bash
npm run test:watch
```

## 🔄 CI/CD

This project uses GitHub Actions for continuous integration and deployment. The workflow is triggered on:
- Push to the `master` branch
- Pull requests to the `master` branch

### CI Pipeline

The CI pipeline includes the following steps:

1. **Environment Setup**
   - Uses Ubuntu latest as the runner
   - Sets up PostgreSQL service container for testing
   - Configures database connection for tests

2. **Build and Test**
   - Installs Bun runtime
   - Installs project dependencies
   - Generates Prisma client
   - Runs database migrations
   - Executes test suite

The workflow ensures code quality by running tests in an isolated environment with a dedicated test database.

## 🔧 Development

Start the development server:
```bash
npm run dev
```

## 📝 License

ISC 