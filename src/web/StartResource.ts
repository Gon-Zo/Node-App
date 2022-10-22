import {Get, JsonController, Post, Controller, Body} from "routing-controllers";
import {StartDTO} from "../service/dto/StartDTO";


@Controller()
@JsonController("/start")
export class StartResource {

    @Get("")
    public async start() {
        console.log("start success")
        return "start";
    }

    @Post()
    public async started(@Body() dto: StartDTO): Promise<StartDTO> {
        return dto
    }
}
