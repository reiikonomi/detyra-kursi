import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '@recruiting/models';
import { PostService } from './posts.service';
import { PostController } from './posts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  exports: [PostService],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
