import { DataSource } from "typeorm"
import { Post } from "./entities/Post"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [Post],
    subscribers: [],
    migrations: [],
})