import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class Tecchnologies {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({nullable: true})
    technology!: string;

    @ManyToOne(() => Profile, profile => profile.technologies,{nullable: true})
    profiles!: Profile
}