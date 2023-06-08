import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  User,
  Course,
  Education,
  Experience,
  Profile,
  Skills,
  Tecchnologies,
  Post,
  Company,
  typeOrmAsyncConfig,
  Interview,
} from '@recruiting/models';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './controllers/auth/auth.module';
import { UsersModule } from './controllers/users/users.module';
import { ProfileModule } from './controllers/profile/profile.module';
import { WorkExperienceModule } from './controllers/profile/work-experience/work-experience.module';
import { CoursesModule } from './controllers/profile/courses/courses.module';
import { RelatedSkillsModule } from './controllers/profile/related-skills/related-skills.module';
import { TechnologiesModule } from './controllers/profile/technologies/technologies.module';
import { EducationModule } from './controllers/profile/education/education.module';
import { PostModule } from './controllers/profile/posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([
      User,
      Course,
      Education,
      Experience,
      Profile,
      Skills,
      Tecchnologies,
      Post,
      Company,
      Interview,
    ]),
    AuthModule,
    UsersModule,
    ProfileModule,
    WorkExperienceModule,
    CoursesModule,
    PostModule,
    RelatedSkillsModule,
    TechnologiesModule,
    EducationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
