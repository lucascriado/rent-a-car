import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'admin',
  database: 'cars',
  password: 'Password1!',
  port: 3306,
});

export default pool;