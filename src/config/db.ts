import { Pool } from 'pg';

export const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shaked',
  port: 5432,
  password: '123456',
});
