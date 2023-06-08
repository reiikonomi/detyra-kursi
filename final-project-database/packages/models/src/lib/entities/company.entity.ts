import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import { Post } from "./post.entity";
import { User } from './user.entity';


@Entity()
export class Company {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column()
    company_name!: string;

    @Column()
    company_identifier!: string;

    @Column()
    country!: string;

    @Column()
    company_description!: string;

    @OneToMany(() => Post, post => post.company, { cascade: ["insert", "update"] })
    posts!: Post[]

    @OneToOne(() => User, user => user.company, {nullable: true})
    user!: User;
}