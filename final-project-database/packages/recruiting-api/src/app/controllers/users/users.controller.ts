import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from '@recruiting/models';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: UserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateUserDto: UserDto) {
    return this.usersService.update(email, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Get("active-status/:email")
  async active_status(@Param('email') email: string) {
    return this.usersService.active_status(email);
  }

  @Get("last-seen-active/:email")
  async last_seen_active(@Param('email') email: string) {
    return this.usersService.last_seen_active(email)
  }

  @Post("activate-user/:email")
  async activate_profile(@Param("email") email: string){
    return this.usersService.activate_profile(email);
  }
}
