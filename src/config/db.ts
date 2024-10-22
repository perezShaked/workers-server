import { Client } from 'pg';
import { GET_DEPARTMENTS } from '../services';

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 3000,
  database: 'postgres',
});

client.query(GET_DEPARTMENTS, (err, result) => {
  if (!err) {
    console.log(result.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
