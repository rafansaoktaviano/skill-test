import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "rafansa",
  database: "classicmodels",
};

const db = mysql.createPool(dbConfig);

export default db;


