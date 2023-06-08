import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User, UserDto, IResponse } from '@recruiting/models';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  create(createUserDto: UserDto): Promise<User> {
    const user = new User();

    user.first_name = createUserDto.first_name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    const users = this.usersRepository.find();
    return users
  }

  async findOne(email: string): Promise<IResponse<User>> {

    /* TODO: Because profile entity has other relations 
    call profile service find one 
    with relations set to true to get all of them */
    const user = await this.usersRepository.findOne({
      where: {
        email: email,
      },
      relations: {
        profile: true
      }
    })

    return {
      status: 200,
      msg: "User found",
      payload: user
    }
  }

  async update(email: string, body: UserDto): Promise<IResponse<User>> {
    
    await this.usersRepository.update({email}, body)

    await this.last_seen_active(email)

    await this.active_status(email)

    const user = await this.findOne(email)
    return {
      status: 200,
      msg:"updated successfully",
      payload: user.payload
    };
  }

  async remove(id: string): Promise<IResponse<DeleteResult>> {
    const user = await this.usersRepository.delete(id);

    return {
      status: 200,
      msg:"deleted successfully",
      payload: user
    }

  }


  async last_seen_active(email: string) {
    const date = new Date
    await this.usersRepository.update({email}, {last_seen_active: date})
  }

  async active_status(email: string) {
    const date = new Date;
    const user = await this.findOne(email);
    const date_diff = date.getDate() - user.payload.last_seen_active.getDate()

    if(date_diff >= 7) {
      await this.usersRepository.update({email}, {is_active: false});
      // send email
    } else {
      await this.usersRepository.update({email}, {is_active: true})
    }
  }

  async activate_profile(email: string): Promise<IResponse<User>>{

    const user = await this.findOne(email); 

    await this.usersRepository.update({email}, {is_active: true});

    return {
      status: 200,
      msg: "Successfully activated acoount",
      payload: user.payload,
    }
  }
}