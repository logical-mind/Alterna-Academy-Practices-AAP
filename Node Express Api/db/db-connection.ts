import { DataSource } from "typeorm"
import "reflect-metadata";
import { UserEntity, WorkerHoursEntity } from "./entities/user.entity";

 export const employeeDB = new DataSource({
    type: "sqlite",
    database: "db/data.db",
   // entities: ["db/entity/*.ts"],
    entities: [UserEntity],
    logging: true,
    synchronize: true,
})

export const workerDB = new DataSource({
    type: "sqlite",
    database: "db/data.db",
   // entities: ["db/entity/*.ts"],
    entities: [WorkerHoursEntity],
    logging: true,
    synchronize: true,
})


employeeDB.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

workerDB.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })    