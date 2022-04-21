import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Artists from "./Artists";

@Entity()
export default class Albums {

    @PrimaryGeneratedColumn({type: 'integer'})
    private albumId!: number

    @Column({nullable: false, length: 160, type: 'nvarchar'})
    private title!: string;

    @ManyToOne(() => Artists)
    @JoinColumn({name: "ArtistsId", referencedColumnName: 'artistId'})
    private artists!: Artists;
}
