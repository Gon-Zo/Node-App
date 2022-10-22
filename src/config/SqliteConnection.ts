import {ConnectionOptions, createConnection, useContainer} from "typeorm";
import Container from 'typedi';
import * as path from "path"
import {User} from "../domain/User";
import AbstractDbConnection from "./AbstractDbConnection";

const root: string = path.resolve(__dirname, "..")

export default class SqliteConnection extends AbstractDbConnection {

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
            // @ts-ignore
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
