import { DataSource, DataSourceOptions } from "typeorm";
import { Post } from "./entities/Post";
import path from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin123",
  database: "postgres",
  synchronize: true,
  // logging: true,
  entities: [Post],
  migrations: [path.join(__dirname, "./migrations/*{.ts,.js}")],
} as DataSourceOptions);
