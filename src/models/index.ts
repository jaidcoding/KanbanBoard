import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'localhost', // Ensure host is always a string
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
  // ...existing code...
});
