# Asesmen PAUD Ainun Habibie - API Server

This repository contains the back-end API server for the Asesmen PAUD Ainun Habibie mobile application. Built with AdonisJS, this server is specifically designed to handle all data operations and respond with JSON for the mobile front-end.

## About The Project
This API server is a core component of the "APAH" (Asesmen PAUD Ainun Habibie) project, developed as a final year thesis. It provides a robust and secure back-end to manage student data, handle various assessment types, and generate automated monthly reports, replacing the previous manual workflow for teachers.

## Key Features
- TypeScript First: Built with a strong TypeScript foundation for scalable and maintainable code.
- Lucid ORM: Integrated for powerful and elegant database interactions (PostgreSQL).
- Authentication: Secure API endpoints using AdonisJS Auth with access tokens.
- Validation: Robust data validation powered by VineJS.
- CORS: Pre-configured Cross-Origin Resource Sharing for secure communication with the mobile app.

# Getting Started
To get a local copy up and running, follow these steps.

## Prerequisites
- Node.js
- pnpm (or npm/yarn)
- PostgreSQL

## Installation & Setup
1. Clone the repository
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```
2. Install dependencies
   ```bash
   pnpm i
   ```
3. Setup environment variables
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Open the `.env` file and fill in your database credentials and any other required variables.
4. Generate application key
   ```bash
   node ace generate:key
   ```
5. Run database migrations
   ```bash
   node ace migration:run
   ```

## Development
To start the development server with hot-reloading:
```bash
pnpm dev
```

## Production Build
To build the application for production:
1. Create the production build
   ```bash
   pnpm build
   ```
2. Navigate to build directory
   ```bash
   cd build
   ```
3. Install production-only dependencie
   ```bash
   pnpm install --prod
   ```
4. Copy your `.env` file to the `build` directory and set `NODE_ENV=production`.
5. Start the production server
   ```bash
   pnpm start
   ```

## Docker Build (Development)
Instructions for running the application using Docker and Docker Compose.
1. Ensure the `DB_HOST` in your `.env` file is set to the Docker service name: `asesmen-paud-postgresql`.
2. Build the Docker image:
   ```bash
   docker build -t your-image-name:latest .
   ```
3. Start the services and wait until all containers run:
    ```bash
   docker-compose up -d
   ```
4. If this is the first time you run the PostgreSQL container, in `asesmen-paud-postgresql` EXEC container menu or via `docker exec -it <hash-number> bash`, do following command
   - `psql -U postgres`, then the rest is on the psql terminal
   - `ALTER ROLE postgres WITH PASSWORD <password>`. Then set this password in `.env` file
   - `exit`
   - `exit` again if you're using `docker exec`
5. In `asesmen-paud` EXEC container menu or via `docker exec -it <hash-number> bash`, do following command
   - `node ace migration:run`
   - `node ace migration:fresh --seed`

# Copyright and License
© 2025 Drs. Eko Adi Sarwoko, M.Kom.; Emerio Kevin Aryaputra; Dr. Aris Puji Widodo, S.Si., M.T. All Rights Reserved.

The source code for this project is currently in the process of official copyright registration with the Directorate General of Intellectual Property, Ministry of Law and Human Rights of the Republic of Indonesia via Universitas Diponegoro Directorate of Innovation, Downstreaming, and Cooperation. Unauthorized use, reproduction, or distribution of this software is strictly prohibited.

This project is licensed under the MIT License - see the LICENSE file for details.
