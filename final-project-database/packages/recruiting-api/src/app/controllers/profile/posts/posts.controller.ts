import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { PostService } from './posts.service';
import { RolesGuard, Roles, Role, PostDto } from '@recruiting/models';
import { JwtAuthGuard } from '../../auth/strategy/jwt-auth.guard';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  create(@Body() body: PostDto) {
    return this.postService.create(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  getAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  like(@Param('id') id: number) {
    return this.postService.like(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  remove(@Param('id') id: number) {
    return this.postService.delete(id);
  }
}
