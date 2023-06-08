import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Experience } from "./experience.entity";

@Entity()
export class Skills {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({nullable: true})
    skill!: string;

    @ManyToMany(() => Experience, (experience) => experience.related_skills,{nullable: true})
    experience!: Experience[]

}