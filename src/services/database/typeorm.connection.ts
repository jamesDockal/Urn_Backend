import { DataSource } from "typeorm";

export const connection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "docker",
  database: process.env.DB_NAME || "fiocruz",
  migrations: ["src/services/database/Migrations"],
});
