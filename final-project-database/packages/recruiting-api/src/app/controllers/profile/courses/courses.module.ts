import { forwardRef, Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from '@recruiting/models';
import { ProfileModule } from '../profile.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), forwardRef(() => ProfileModule)],
  controllers: [CoursesController],
  exports: [CoursesService],
  providers: [CoursesService]
})
export class CoursesModule {}
