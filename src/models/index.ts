import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST as string || 'localhost', // Ensure host is always a string
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
  // ...existing code...
});

// Example usage of sequelize to authenticate the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
