import { ConnectionOptions, createConnection, useContainer } from "typeorm";
import Container from 'typedi';
import * as path from "path"
import { User } from "../domain/User";
import { DbConnection } from "./DbConnection";

const root: string = path.resolve(__dirname, "..")

export default class SqliteConnection implements DbConnection {

    constructor() {
    }

    async connection(): Promise<void> {

        const connectionOption: ConnectionOptions = {
            type: "sqlite",
            database: `${root}/db/chinook.sqlite`,
            // domain setting
            entities: [
                User
            ],
            // table naming setting
            // namingStrategy: new SnakeNamingStrategy(),
            cli: {
                // table synchronize
                migrationsDir: `${root}/db`
            },
            // table synchronize
            migrations: [`${root}/db/*.js`],
            // table synchronize
            synchronize: true,
            // logging optional
            logging: true
        }

        useContainer(Container);

        await createConnection(connectionOption)
    }
}
