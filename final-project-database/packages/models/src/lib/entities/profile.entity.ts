import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Experience } from './experience.entity';
import { User } from './user.entity';
import { Tecchnologies } from './technologies.entity';
import { Education } from './education.entity';
import { Course } from './course.entity';


@Entity()
export class Profile {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({nullable: true})
    years_experience!: number;

    @OneToMany(() => Tecchnologies, technologies => technologies.profiles, { cascade: ["insert", "update"], nullable: true })
    technologies!: Tecchnologies[];

    @OneToMany(() => Experience, (experience) => experience.profile, { cascade: ["insert", "update"], nullable: true })
    work_experience!: Experience[];

    @OneToOne(() => User, user => user.profile)
    user!: User;

    @Column({nullable: true})
    resume!: string;

    @OneToMany(() => Education, education => education.profile, { nullable: true })
    education!: Education[]

    @OneToMany(() => Course, course => course.profile, { nullable: true })
    courses!: Course[]

}