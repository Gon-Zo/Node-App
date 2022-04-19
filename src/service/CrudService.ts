export default interface CrudService<Entity> {
    getAll: () => Promise<Entity[]>
    getOne: (id: number) => Promise<Entity>
    update: (id: number, any: any) => void
    removeOne: (id: number) => void
}
