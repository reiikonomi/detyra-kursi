import { Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Profile } from "./profile.entity";
import { Role } from '../enums/role.enum';
import { Post } from './post.entity';
import { Interview } from "./interview.entity";
import { Company } from './company.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({nullable: true})
    first_name!: string;

    @Column({nullable: true})
    last_name!: string;

    @Column({unique: true, nullable:true})
    phone_number!: string;

    @Column({unique: true })
    email!: string;

    @Column()
    password!:string;
    
    @Column({nullable: true})
    email_verified!: boolean;

    @Column({nullable: true})
    is_active!: boolean;

    @Column({nullable: true})
    last_seen_active!: Date;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    roles!: Role[]

    @OneToOne(() => Profile, profile => profile.user, { cascade: ["insert", "update"], nullable: true})
    @JoinColumn()
    profile!: Profile

    @Column({nullable: true})
    is_interested_in_promos!: boolean;

    @ManyToMany(() => Post, post => post.candidates, {nullable: true})
    @JoinTable()
    applications!: Post[]

    @OneToOne(() => Company, company => company.user, { cascade: ["insert", "update"], nullable: true} )
    @JoinColumn()
    company!: Company;

    @OneToMany(() => Interview, interview => interview.user, {nullable: true})
    interviews!: Interview[]

    @Column({nullable: true})
    is_verified_developer!: boolean;

    @Column({nullable: true})
    is_verified_company!: boolean;

    @Column({nullable: true})
    has_passed_first_check_dev!: boolean;

    @Column({nullable: true})
    has_priority_dev!: boolean;

    @Column({nullable: true})
    has_priority_company!: boolean;

}