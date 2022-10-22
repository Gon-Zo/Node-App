import {Service} from "typedi";
import CrudService from "./CrudService";
import {User} from "../domain/User";

@Service("userService")
export class UserService implements CrudService<User> {

        // @InjectRepository() private readonly userRepository: UserRepository) {
    constructor(
    ){
    }

    async getAll(): Promise<User[]> {
        // return this.userRepository.findAll()

        // @ts-ignore
        return null
    }

    getOne(id: number): Promise<User> {
        // @ts-ignore
        return null
    }

    removed(id: number): void {
    }

    updated(id: number, any: any): void {
    }

    async created(any: any): Promise<User> {
        // return this.userRepository.save(any)
        // @ts-ignore
        return null
    }
}
