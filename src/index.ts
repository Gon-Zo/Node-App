// import { App } from "./App";

import { App } from "./App";

try {

    const app = new App().getServer();

    const port = 4000

    app.listen(port, () =>
        console.log(`start to server port:${port}`));

    // new App().getServer();

} catch (e) {
    console.log(e)
}
