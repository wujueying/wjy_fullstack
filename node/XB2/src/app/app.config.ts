<<<<<<< HEAD
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
=======
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
>>>>>>> 6da7d2f51ab5f40cd7b50c2c80bba2eeeae640b6
} = process.env