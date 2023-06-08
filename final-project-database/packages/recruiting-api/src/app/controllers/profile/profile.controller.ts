import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { Role, Roles } from '@recruiting/models';
import { ProfileService } from './profile.service';
import { RolesGuard } from '@recruiting/models';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  create(@Body() createProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  async findOne(@Param('id') id: number) {
    return await this.profileService.findOne(id);
  }

  // TODO: Add deactivate profile and delete profile
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.profileService.remove(+id);
  // }
}
