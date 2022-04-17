import { Request, Response } from "express";
import { Get, HttpCode, JsonController } from "routing-controllers";
import { UserSerivce } from "../service/UserSerivce";

@JsonController("/user")
export class UserResource {

    constructor(private userService: UserSerivce) {
    }

    @HttpCode(200)
    @Get("")
    public async showByUserList(request: Request, response: Response) {
        return this.userService.getByUserList();
    }

}
