// server/db/db-connection.js;
import pgPromise from 'pg-promise';
import {config} from "dotenv";

config();

// Create Database Connection
const pgp = pgPromise({});

const db = pgp({
    connectionString: process.env.DB_URI,
}
);

export default db;
