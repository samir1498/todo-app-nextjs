// src/data-source.ts
import { DataSource } from "typeorm";
import { Todo } from "./entity/Todo";
import "reflect-metadata";

console.log(__dirname);
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true, // Note: Use this in development only, for production use migrations
  logging: false,
  entities: [Todo],
  migrations: [],
  subscribers: [],
});

// Initialize the data source
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
