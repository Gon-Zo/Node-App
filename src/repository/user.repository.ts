import { EntityRepository, createQueryBuilder } from "typeorm";
import { User } from "../domain/User";


@EntityRepository(User)
export class UserRepository {

    findAll() {
        return createQueryBuilder()
            .select()
            .from(User,"user")
            .getMany()
    }

}
