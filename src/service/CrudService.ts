export default interface CrudService<Entity> {
    readonly getAll: () => Promise<Entity[]>
    readonly getOne: (id: number) => Promise<Entity>
    readonly updated: (id: number, any: any) => void
    readonly removed: (id: number) => void
    readonly created: (any: any) => Promise<Entity>
}
