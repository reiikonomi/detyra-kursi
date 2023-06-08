import { Controller, Get, Body, Patch, Param, Delete, Post, UseGuards, } from '@nestjs/common';
import { WorkExperienceService } from './work-experience.service';
import { Role, Roles, RolesGuard, WorkExperienceDto } from '@recruiting/models';
import { JwtAuthGuard } from '../../auth/strategy/jwt-auth.guard';
@Controller('work-experience')
export class WorkExperienceController {
  constructor(private readonly workExperienceService: WorkExperienceService, ) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  async create(@Param('id') profileId: number,@Body() expDto: WorkExperienceDto[] ) {

    return this.workExperienceService.create(expDto, profileId);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  async findAll() {
    return this.workExperienceService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  findOne(@Param('id') id: number) {
    return this.workExperienceService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  update(@Param('id') id: number, @Body() updateExpDto: WorkExperienceDto) {
    return this.workExperienceService.update(id, updateExpDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  remove(@Param('id') id: string) {
    return this.workExperienceService.remove(+id);
  }
}
