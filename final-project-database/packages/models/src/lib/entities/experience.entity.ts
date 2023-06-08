import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Skills } from './skills.entity';
import { Profile } from './profile.entity';

@Entity()
export class Experience {

    @PrimaryGeneratedColumn('uuid') 
    id!: number;

    @Column({nullable: true})
    title!: string;

    @Column({nullable: true})
    description!: string;

    @Column({nullable: true})
    start_date!: Date;

    @Column({nullable: true})
    end_date!: Date;

    @Column({nullable: true})
    is_employed!: boolean;

    @ManyToMany(() => Skills, (skills) => skills.experience, { cascade: ["insert", "update"], nullable: true })
    @JoinTable()
    related_skills!: Skills[]

    @ManyToOne(() => Profile, (profile) => profile.work_experience, {nullable: true})
    profile!: Profile;
}
