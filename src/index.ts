// import { App } from "./App";

import { App } from "./App";
import { banner } from "./config/AppConfiguration";

try {

    const app = new App().getServer();

    const port = 4000

    app.listen(port, () => banner(port));

    // new App().getServer();

} catch (e) {
    console.log(e)
}
