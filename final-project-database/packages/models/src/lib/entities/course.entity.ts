import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class Course {

    @PrimaryGeneratedColumn('uuid')
    id!: number;

    @Column({nullable: true})
    course_name!: string;

    @Column({nullable: true})
    course_issuer!: string;

    @Column({nullable: true})
    course_subject!: string;

    @Column({nullable: true})
    course_start_date!: Date;

    @Column({nullable: true})
    course_end_date!: Date;

    @Column({nullable: true})
    is_attending!: boolean;

    @Column({nullable: true})
    course_description!: string;

    @ManyToOne(() => Profile, profile => profile.courses, {nullable: true})
    profile!: Profile;
}