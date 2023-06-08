import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from './user.entity';

@Entity()
export class Interview {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({nullable: true})
    has_signed_up_for_interview!: boolean;

    @Column({nullable: true})
    is_interview_approved!: boolean;

    @Column({nullable: true})
    is_in_review!: boolean;

    @Column({nullable: true})
    interview_date!: Date;

    @Column({nullable: true})
    approximate_review_date!: Date;

    @Column({nullable: true})
    comments!: string;

    @Column({nullable: true})
    has_follow_up_interview!: boolean;

    @Column({nullable: true})
    has_passed!: boolean;

    @Column({nullable: true})
    technology!: string;

    @Column({nullable: true})
    position!: string;

    @ManyToOne(() => User, user => user.interviews, {nullable: true})
    user!: User;
}