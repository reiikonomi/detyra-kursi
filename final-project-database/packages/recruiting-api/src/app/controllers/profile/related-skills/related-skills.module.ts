import { Module } from '@nestjs/common';
import { RelatedSkillsService } from './related-skills.service';
import { RelatedSkillsController } from './related-skills.controller';

@Module({
  controllers: [RelatedSkillsController],
  providers: [RelatedSkillsService]
})
export class RelatedSkillsModule {}
