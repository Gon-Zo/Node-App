import { App } from "./App";
<<<<<<< HEAD
import SqliteConnection from "./config/SqliteConnection";
=======
import { banner } from "./config/AppConfiguration";
>>>>>>> 91b6bae87f6dded128a311196db26a14c8f1ad33

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
