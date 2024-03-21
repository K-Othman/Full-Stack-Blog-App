import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Apple@1515",
  database: "blog",
});
