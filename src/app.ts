import express from "express";
import {v4 as uuid} from 'uuid';
const showBanner = require('node-banner');

const createByBanner = async (port: number) => {
    const label = `🔥 Typescript & Node Express \n GitHub: https://github.com/Gon-Zo/Node_Application \n Host: http://localhost:${port} \n Developer: @Gon-Zo`
    await showBanner('Node Express', label);
}

class App {

    public application: express.Application;

    constructor() {
        this.application = express();
    }

}

const app = new App().application;
const id: string = uuid();
const port = 4000

app.get("/", (req: express.Request, res: express.Response) => {
    res.send(`start =======>>>>>>> ${id}`);
})

app.listen(port, () => createByBanner(port));
