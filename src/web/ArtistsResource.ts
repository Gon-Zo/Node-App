import { Inject } from "typedi";
import ArtistsService from "../service/ArtistsService";
import { Get, JsonController } from "routing-controllers";
import Artists from "../domain/Artists";

@JsonController("/artists")
export default class ArtistsResource {

    constructor(@Inject() private readonly service: ArtistsService) {
    }

    @Get('')
    async getArtists(): Promise<Artists[]> {
        return this.service.getAll()
    }
}
