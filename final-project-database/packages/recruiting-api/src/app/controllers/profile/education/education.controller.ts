import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EducationDto, Role, Roles, RolesGuard } from '@recruiting/models';
import { EducationService } from './education.service';
import { JwtAuthGuard } from '../../auth/strategy/jwt-auth.guard';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  async create(@Param('id') profileId: number, @Body() edDto: EducationDto[]) {
    return this.educationService.create(edDto, profileId);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  findAll() {
    return this.educationService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  findOne(@Param('id') id: number) {
    return this.educationService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  async update(@Param('id') id: number, @Body() edDto: EducationDto) {
    return await this.educationService.update(id, edDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  remove(@Param('id') id: string) {
    return this.educationService.remove(+id);
  }
}
