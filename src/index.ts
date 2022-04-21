import { App } from "./App";
import { banner } from "./config/AppConfiguration";
import SqliteConnection from "./config/SqliteConnection";

try {

    // db connection
    // spring 에서 ioc 컨테이너가 있는지 확인
    const dbConnection = new SqliteConnection();

    const app = new App(dbConnection).getServer();

    const port = 4000

    app.listen(port, () => banner(port));

} catch (e) {
    console.log(e)
}
