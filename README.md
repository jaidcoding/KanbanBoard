# KanbanBoard

KanbanBoard is a project management tool that helps you visualize your work, limit work-in-progress, and maximize efficiency. This project is built using Node.js, Express, Sequelize, and PostgreSQL.

## Features

- User authentication and authorization
- Create, update, and delete tickets
- Assign tickets to users
- Track ticket status

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/jaidcoding/KanbanBoard.git
   cd KanbanBoard
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the `server` directory and add the following variables:

   ```properties
   DB_NAME=kanbanboard_db_b5v8
   DB_USER=kanbanboard_db_b5v8_user
   DB_PASSWORD=PP3r4xyKhn82YyiQ1uOWeqKs37EF1lMZ
   DB_HOST=dpg-cutth2l6l47c73a972cg-a
   DB_PORT=5432
   JWT_SECRET_KEY=6148d189993b2bee606c9baf5e7bed6c0096da43bbb3a4a7ca156b78a6b5a0f64383009c346b96dd3412c65447c4001c7c79610f8293ddf9a635dbc8f5dc2a35
   ```

4. Run the database migrations:

   ```sh
   npx sequelize-cli db:migrate
   ```

5. Start the server:

   ```sh
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new user or log in with an existing account.
3. Create, update, and manage your tickets.

## Deployment

To deploy the application on Render, follow these steps:

1. Push your code to GitHub.
2. Connect your GitHub repository to Render.
3. Set the environment variables in the Render dashboard as described in the "Installation" section.
4. Deploy the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
