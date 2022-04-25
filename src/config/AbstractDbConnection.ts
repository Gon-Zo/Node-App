import { Connection } from "./Connection";

export default abstract class AbstractDbConnection implements Connection {
    abstract connection(): Promise<void>;
}
