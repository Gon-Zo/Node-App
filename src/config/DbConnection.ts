export interface DbConnection {
    connection: () => Promise<void>
}
