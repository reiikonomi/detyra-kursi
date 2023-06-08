import { forwardRef, Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Education } from '@recruiting/models';
import { ProfileModule } from '../profile.module';

@Module({
  imports: [TypeOrmModule.forFeature([Education]),forwardRef(() => ProfileModule)],
  exports: [EducationService],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {}
