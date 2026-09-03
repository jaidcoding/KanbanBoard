# Kanban Board

A full-stack project board with JWT authentication — create tickets, assign them, and drag them through swimlanes.

![React](https://img.shields.io/badge/React-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)
![Express](https://img.shields.io/badge/Express-000000)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1)

## Features

- **Authentication** — login issues a JWT; protected routes reject unauthenticated requests
- **Tickets** — full create, read, update and delete
- **Assignment** — tickets belong to a user
- **Swimlanes** — tickets grouped by status (`Todo`, `In Progress`, `Done`)
- **Session handling** — tokens stored client-side, cleared on logout

## Architecture

```
client/                       React + TypeScript (Vite)
  src/api/authAPI.tsx         login and token handling
  src/api/ticketAPI.tsx       ticket CRUD
  src/api/userAPI.tsx         user lookups
  src/components/Swimlane.tsx status columns
  src/components/TicketCard.tsx
  src/interfaces/             shared response and entity types
server/
  models/                     Sequelize User and Ticket models
  routes/                     REST endpoints
  middleware/                 JWT verification
  seeds/                      seed data
```

## Setup

**Prerequisites:** Node.js 14+, PostgreSQL

1. Create the database and set your connection details plus a `JWT_SECRET` in `server/.env`
2. Install and seed:

```bash
npm install
npm run seed
```

3. Run both halves together:

```bash
npm run start:dev
```

Client on http://localhost:3000, API on http://localhost:3001.

## Stack

React · TypeScript · Vite · Express · Sequelize · PostgreSQL · JWT

## License

MIT — see [LICENSE](LICENSE).
