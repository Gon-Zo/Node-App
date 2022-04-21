import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import ArtistsRepository from "../repository/ArtistsRepository";
import CrudService from "./CrudService";
import Artists from "../domain/Artists";


@Service()
export default class ArtistsService implements CrudService<Artists> {

    constructor(@InjectRepository() private readonly artistsRepository: ArtistsRepository) {
    }

    async getAll(): Promise<Artists[]> {
        return this.artistsRepository.find()
    }

    getOne(id: number): Promise<Artists> {
        // return Promise.resolve(undefined);

        // @ts-ignore
        return null
    }

    async created(any: any): Promise<Artists> {
        return this.artistsRepository.save(any);
    }

    removed(id: number): void {
    }

    updated(id: number, any: any): void {
    }

}
