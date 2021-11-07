import { Service } from "typedi";
import { UserRepository } from "../repository/user.repository";

@Service()
export class UserService {

    constructor(private userRepository: UserRepository) {
    }

    public async getByUserList() {
        return this.userRepository.findAll();
    }

}
