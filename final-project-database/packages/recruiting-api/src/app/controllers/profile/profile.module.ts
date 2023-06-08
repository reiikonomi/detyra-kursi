import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience, Profile, User, Education, Tecchnologies } from '@recruiting/models';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { EducationModule } from './education/education.module';
import { CoursesModule } from './courses/courses.module';
import { TechnologiesModule } from './technologies/technologies.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Experience, Education, Tecchnologies]), WorkExperienceModule, EducationModule, CoursesModule, TechnologiesModule],
  controllers: [ProfileController],
  providers: [ProfileService], 
  exports: [ProfileService]
})
export class ProfileModule {}
