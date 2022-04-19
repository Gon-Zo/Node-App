import { ConnectionOptions, createConnection, useContainer } from "typeorm";
import Container from 'typedi';

import * as path from "path"
import { User } from '../domain/User';

// Project Path
const root: string = path.resolve(__dirname, "..")

export const createDatabaseConnection = async () => {
    const connectionOption: ConnectionOptions = {
        type: "sqlite",
        database: `${root}\db\chinook.sqlite`,
        // domain setting
        entities: [
            User
        ],
        // entities: [
        //     "src/domain/*.ts"
        // ],
        // cli: {
        //     "entitiesDir": "src/domain/*.ts"
        // },
        // table naming setting
        // namingStrategy: new SnakeNamingStrategy(),
        // table synchronize
        // synchronize: true,
        // logging optional
        logging: true
    }
    useContainer(Container);
    await createConnection(connectionOption)
}
