import { Service } from "typedi";
import { UserRepository } from "../repository/UserRepository";
import { InjectRepository } from "typeorm-typedi-extensions";
import CrudService from "./CrudService";
import { User } from "../domain/User";

@Service("userService")
export class UserService implements CrudService<User> {

    constructor(
        @InjectRepository() private readonly userRepository: UserRepository) {
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.findAll()
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
        return this.userRepository.save(any)
    }
}
