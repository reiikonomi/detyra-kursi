import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { Role, Roles, RolesGuard } from '@recruiting/models';
import { TechnologiesService } from './technologies.service';
import { JwtAuthGuard } from '../../auth/strategy/jwt-auth.guard';
@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  // @Post()
  // create() {
  //   return this.technologiesService.create();
  // }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  findAll() {
    return this.technologiesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.technologiesService.findOne(+id);
  // }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  remove(@Param('id') id: string) {
    return this.technologiesService.remove(+id);
  }
}
