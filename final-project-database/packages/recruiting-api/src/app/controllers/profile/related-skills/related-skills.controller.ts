import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelatedSkillsService } from './related-skills.service';

@Controller('related-skills')
export class RelatedSkillsController {
  constructor(private readonly relatedSkillsService: RelatedSkillsService) {}

  @Post()
  create() {
    return this.relatedSkillsService.create();
  }

  @Get()
  findAll() {
    return this.relatedSkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relatedSkillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.relatedSkillsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relatedSkillsService.remove(+id);
  }
}
