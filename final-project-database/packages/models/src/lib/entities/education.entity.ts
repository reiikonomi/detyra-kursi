import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class Education {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({nullable: true})
    educatiion_institution!: string;

    @Column({nullable: true})
    education_level!: string;

    @Column({nullable: true})
    is_attending!: boolean;

    @ManyToOne(() => Profile, profile => profile.education, {nullable: true})
    profile!: Profile;
}