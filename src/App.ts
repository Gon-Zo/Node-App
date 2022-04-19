import express from "express";
import { Container } from "typedi";
import { useContainer as routingUseContainer, useExpressServer } from "routing-controllers";
import { StartResource } from "./web/StartResource";
import { createDatabaseConnection } from "./config/DataBaseConfiguration";
import { UserResource } from "./web/UserResource";

export class App {

    private readonly server: express.Application;

    constructor() {
        this.server = express();
        this.setExpress()
        this.setDatabase()
    }

    private setExpress(): void {
        try {
            routingUseContainer(Container);

            // createExpressServer({
            //     routePrefix: "/api",
            //     controllers: [StartResource, UserResource],
            // }).listen(4000);

            useExpressServer(this.server, {
                routePrefix: "/api",
                controllers: [StartResource, UserResource],
            });

        } catch (error) {
            console.log(error)
        }
    }

    private async setDatabase(): Promise<void> {
        await createDatabaseConnection()
            .catch(error => console.log(`connection error => ${error}`));
    }

    getServer(): express.Application {
        return this.server
    }
}

