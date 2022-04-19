import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity(
    'user'
)
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    private id!: number;

    @Column()
    private firstName!: string;

}
