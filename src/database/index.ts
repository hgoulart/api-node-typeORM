import "reflect-metadata"
import { DataSource } from "typeorm";
import { Users } from "../entity/Users";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "crud_db",
    entities: [
        Users
    ],
    synchronize: true,
    logging: false
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export { AppDataSource }