import { EntityRepository, createQueryBuilder, Repository } from "typeorm";
import { User } from "../domain/User";


@EntityRepository(User)
export class UserRepository extends Repository<User> {

    findAll(): Promise<User[]> {
        return createQueryBuilder()
            .select()
            .from(User, "user")
            .getMany()
    }
}

