import dotenv from 'dotenv';
dotenv.config();

console.log(process.env);

// SET PORT = 1234 && node app.js cross-env 
export const { APP_PORT } = process.env;  // ?

export const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_PASSWORD,
  MYSQL_USER,
  MYSQL_DATABASE
} = process.env