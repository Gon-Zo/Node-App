import {Get, JsonController} from "routing-controllers";
import {Service} from "typedi";


@Service()
@JsonController("/start")
export class StartResource {

    @Get("")
    public async start() {
        console.log("start success")
        return "start";
    }
}
