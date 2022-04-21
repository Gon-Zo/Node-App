import express from "express";
import { Container } from "typedi";
import { useContainer as routingUseContainer, useExpressServer } from "routing-controllers";
import { StartResource } from "./web/StartResource";
import { UserResource } from "./web/UserResource";
import { DbConnection } from "./config/DbConnection";
import ArtistsResource from "./web/ArtistsResource";

export class App {

    private readonly server: express.Application;

    private readonly dbConnection: DbConnection

    constructor(dbConnection: DbConnection) {
        this.server = express();
        this.dbConnection = dbConnection
        this.setExpress()
        this.setDatabase()
    }

    private setExpress(): void {
        try {
            routingUseContainer(Container);

            useExpressServer(this.server, {
                routePrefix: "/api",
                controllers: [StartResource, UserResource, ArtistsResource],
            });

        } catch (error) {
            console.log(error)
        }
    }

    private async setDatabase(): Promise<void> {
        await this.dbConnection.connection()
            .catch(error => console.log(`connection error={${error}`))
    }

    getServer(): express.Application {
        return this.server
    }
}
