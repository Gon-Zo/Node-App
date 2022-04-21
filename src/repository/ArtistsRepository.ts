import { EntityRepository, Repository } from "typeorm";
import Artists from "../domain/Artists";


@EntityRepository(Artists)
export default class ArtistsRepository extends Repository<Artists> {
}
