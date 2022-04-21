import { Request, Response } from "express";
import { Get, JsonController } from "routing-controllers";
import { UserService } from "../service/UserService";

@JsonController("/user")
export class UserResource {

    constructor(private userService: UserService) {
    }

    @Get("")
    public async showByUserList(request: Request, response: Response) {
        return this.userService.getAll();
    }
}
