import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "davidcastellanos",
    password: "124125126",
    database: "items",
    synchronize: true,
    logging: false,
    entities: [],
    subscribers: [],
    migrations: [],
})