import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { Company } from "./company.entity";
import { User } from './user.entity';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({nullable: true})
    title!: string;
 
    @Column({nullable: true})
    description!: string;

    @Column({nullable: true})
    likes!: number;

    @ManyToOne(()=> Company, company => company.posts, {nullable: true})
    company!: Company;

    @ManyToMany(() => User, user => user.applications, {nullable: true})
    candidates!: User[]
}