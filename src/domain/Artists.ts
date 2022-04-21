import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Artists {

    @PrimaryGeneratedColumn({name: "ArtistId", type: 'integer'})
    private artistId!: number

    @Column({name: "Name", nullable: false, type: 'nvarchar', length: 120})
    private name!: string
}
