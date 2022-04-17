import express from "express";
import { Container } from "typedi";
// import { createDatabaseConnection } from "./config/databse.configuration";
import { createByBanner } from "./config/AppConfiguration";
import { useContainer as routingUseContainer, useExpressServer } from "routing-controllers";
import { UserResource } from "./web/UserResource";

class App {

    public application: express.Application;

    constructor() {
        this.application = express();
        this.setExpress()
        // this.setDatabase()
    }

    private setExpress(): void {
        try {
            routingUseContainer(Container);
            useExpressServer(this.application, {
                routePrefix: "/api",
                controllers: [UserResource],
            });
        } catch (error) {
            console.log(error)
        }
    }

    // public async setDatabase(): Promise<void> {
    //     try {
    //         await createDatabaseConnection();
    //     } catch (error) {
    //         throw error;
    //     }
    // }

}

try {

    const app = new App().application;
    const port = 4000

    app.listen(port, () => createByBanner(port));

} catch (e) {
    console.log(e)
}
