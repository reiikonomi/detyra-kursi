import { forwardRef, Module } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tecchnologies } from '@recruiting/models';
import { ProfileModule } from '../profile.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tecchnologies]), forwardRef(() => ProfileModule)],
  exports: [TechnologiesService],
  controllers: [TechnologiesController],
  providers: [TechnologiesService]
})
export class TechnologiesModule {}
