import { Module, forwardRef } from '@nestjs/common';
import { WorkExperienceService } from './work-experience.service';
import { WorkExperienceController } from './work-experience.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from '@recruiting/models';
import { ProfileModule } from '../profile.module';

@Module({
  imports:[TypeOrmModule.forFeature([Experience]), forwardRef(() => ProfileModule)],
  exports: [WorkExperienceService],
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService]
})
export class WorkExperienceModule {}
