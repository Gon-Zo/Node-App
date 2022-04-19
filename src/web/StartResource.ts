import { Get, HttpCode, JsonController } from "routing-controllers";
import { Service } from "typedi";


@Service()
@JsonController("/start")
export class StartResource {

    @Get("")
    @HttpCode(200)
    public async start() {
        return "start";
    }
}
