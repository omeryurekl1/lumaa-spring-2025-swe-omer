# Task Management Application

A full-stack task management application built with React + TypeScript (frontend), Node.js (backend), and PostgreSQL (database).

## Features

- User authentication (register/login) with JWT
- Protected task management features
- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Secure password hashing
- TypeScript implementation
- Material-UI for clean interface

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Setup Instructions

### 1. Database Setup

1. Make sure PostgreSQL is running on your system
2. Create a PostgreSQL user (if not exists):
   ```bash
   createuser -s postgres
   ```
3. Create the database and tables:
   ```bash
   psql postgres -f database.sql
   ```

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_DATABASE=task_management
   JWT_SECRET=task_management_secret_key_change_in_production
   PORT=3001
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

The backend server will run on http://localhost:3001

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend application will run on http://localhost:3000

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### Tasks (Protected Routes)
- `GET /tasks` - Get all tasks for the authenticated user
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Testing

1. Register a new account using the registration form
2. Login with your credentials
3. Create, edit, and delete tasks
4. Mark tasks as complete/incomplete
5. Test logout functionality

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── controllers/    (auth & task controllers)
│   │   ├── entities/       (User & Task models)
│   │   ├── middleware/     (auth middleware)
│   │   ├── routes/         (auth & task routes)
│   │   └── index.ts        (main app)
│   ├── .env                (configuration)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     (LoginForm, RegisterForm, TaskList)
│   │   ├── pages/         (LoginPage, TasksPage)
│   │   ├── services/      (API calls)
│   │   ├── utils/         (auth utilities)
│   │   └── App.tsx        (main app with routing)
│   └── package.json
└── database.sql           (database setup)
```

## Technologies Used

- Frontend:
  - React
  - TypeScript
  - Material-UI
  - React Router
  - Axios

- Backend:
  - Node.js
  - Express
  - TypeORM
  - PostgreSQL
  - JWT
  - bcrypt

## Salary Expectations

$25 - $30 an hour

## Notes

- The JWT secret in the .env file should be changed in a production environment
- Password hashing is implemented using bcrypt
- The frontend uses Material-UI for a clean, responsive interface
- All routes under /tasks are protected and require authentication
- The application uses TypeScript for better type safety and development experience

## Video Demo

[Click here to watch the demo video](https://www.loom.com/share/5badeb0d9ce04943a70898359d80adc3?sid=a6d79570-ef8f-4053-8df0-6fd3ffc3ffc2)

For a detailed breakdown of the demo, see [DEMO.md](./DEMO.md)

The demo video shows:
- User registration process
- Login functionality
- Creating new tasks
- Updating existing tasks
- Marking tasks as complete
- Deleting tasks
- Protected routes in action 