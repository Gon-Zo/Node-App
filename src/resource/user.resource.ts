import { Request, Response } from "express";
import { Get, HttpCode, JsonController } from "routing-controllers";
import { UserService } from "../service/user.service";

@JsonController("/user")
export class UserResource {

    constructor(private userService: UserService) {
    }

    @HttpCode(200)
    @Get("")
    public async showByUserList(request: Request, response: Response) {
        return this.userService.getByUserList();
    }

}
