# Courier Partner Management Panel

A full-stack application for managing courier partners, built with React, Node.js, Express, and PostgreSQL.

## Tech Stack

### Frontend (Client)

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Ant Design** - UI components
- **React Query (TanStack Query)** - Data fetching and caching
- **React Router** - Routing
- **Axios** - HTTP client
- **Sonner** - Toast notifications

### Backend (Server)

- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **Prisma** - ORM for database management
- **PostgreSQL** - Database
- **CORS** - Cross-origin resource sharing

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)
- **Git**

## Project Structure

```
Courier-Partner-Management-Panel/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── api/           # API configuration
│   │   ├── components/    # Reusable components
│   │   ├── layouts/       # Layout components
│   │   ├── pages/         # Page components
│   │   ├── router/        # Routing configuration
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   ├── controllers/   # Request controllers
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── prisma/        # Prisma client
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   └── package.json
└── README.md
```

## Environment Variables

⚠️ **Important:** You need to create `.env` files for both the server and client before running the application.

### Server Environment Variables

Create a `.env` file in the `server/` directory with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/courier_partner_db?schema=public"
PORT=3000
```

**Variables:**

- `DATABASE_URL` - PostgreSQL connection string (replace `username`, `password`, `localhost:5432`, and `courier_partner_db` with your database credentials)
- `PORT` - Server port number (default: 3000)

### Client Environment Variables

Create a `.env` file in the `client/` directory with the following variable:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

**Variables:**

- `VITE_API_BASE_URL` - Base URL for the backend API (adjust the port if your server runs on a different port)

> **Note:** In Vite, environment variables must be prefixed with `VITE_` to be accessible in the client code.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Courier-Partner-Management-Panel
```

### 2. Database Setup

1. **Create a PostgreSQL database:**

```bash
# Using PostgreSQL command line
createdb courier_partner_db

# Or using psql
psql -U postgres
CREATE DATABASE courier_partner_db;
```

2. **Navigate to the server directory:**

```bash
cd server
```

3. **Create and configure the `.env` file:**

```bash
touch .env
```

Add the environment variables as described in the [Environment Variables](#environment-variables) section above.

4. **Install server dependencies:**

```bash
npm install
```

5. **Run database migrations:**

```bash
npx prisma migrate dev
```

This will:

- Create the database tables based on the Prisma schema
- Generate the Prisma Client

6. **(Optional) Generate Prisma Client:**

```bash
npx prisma generate
```

### 3. Server Setup

1. **Start the development server:**

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

2. **Verify the server is running:**

Visit `http://localhost:3000` in your browser. You should see "Hello World".

### 4. Client Setup

1. **Navigate to the client directory (from project root):**

```bash
cd ../client
```

2. **Install client dependencies:**

```bash
npm install
```

3. **Create and configure the `.env` file:**

```bash
touch .env
```

Add the environment variables as described in the [Environment Variables](#environment-variables) section above.

4. **Start the development server:**

```bash
npm run dev
```

The client will start on `http://localhost:5173` (or another available port).

### 5. Access the Application

- **Frontend:** Open `http://localhost:5173` in your browser
- **Backend API:** `http://localhost:3000/api`

## Available Scripts

### Server Scripts

```bash
cd server

npm run dev      # Start development server with hot reload
```

### Client Scripts

```bash
cd client

npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## API Endpoints

The following API endpoints are available:

- `GET /api/partners` - Get all partners
- `GET /api/partners/:id` - Get partner by ID
- `POST /api/partners` - Create a new partner
- `PUT /api/partners/:id` - Update a partner
- `DELETE /api/partners/:id` - Delete a partner

## Database Schema

The `Partner` model includes:

- `id` - Unique identifier (UUID)
- `name` - Partner name
- `email` - Email address (unique)
- `phone` - Phone number (unique)
- `baseRate` - Base delivery rate
- `deliverySpeed` - Delivery speed
- `rating` - Partner rating (optional)
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## Development Workflow

1. **Start the database** (PostgreSQL should be running)

2. **Start the server** (in one terminal):

   ```bash
   cd server
   npm run dev
   ```

3. **Start the client** (in another terminal):

   ```bash
   cd client
   npm run dev
   ```

4. **Make changes** - Both servers support hot reload

## Troubleshooting

### Database Connection Issues

- Verify PostgreSQL is running: `pg_isready`
- Check your `.env` file has the correct `DATABASE_URL`
- Ensure the database exists and credentials are correct

### Port Already in Use

- Change the `PORT` in server `.env` file
- Update `VITE_API_BASE_URL` in client `.env` to match

### Prisma Issues

- Run `npx prisma generate` to regenerate the Prisma Client
- Run `npx prisma migrate reset` to reset the database (⚠️ This will delete all data)
- Run `npx prisma studio` to open Prisma Studio and inspect your database

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

ISC
