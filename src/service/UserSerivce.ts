import { Service } from "typedi";
import { UserRepostiory } from "../repository/UserRepostiory";

@Service()
export class UserSerivce {

    constructor(private userRepository: UserRepostiory) {
    }

    public async getByUserList() {
        return this.userRepository.findAll();
    }

}
