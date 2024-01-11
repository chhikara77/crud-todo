// utils/database.js
import pgp from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const { POSTGRES_CONNECTION_STRING } = process.env;
const db = pgp()(POSTGRES_CONNECTION_STRING);

export default db;
