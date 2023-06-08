import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IResponse, Post, PostDto } from '@recruiting/models';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>
  ) {}

  async create(postDto: PostDto) {
    const post = new Post();

    post.title = postDto.title;
    post.description = postDto.description;
    post.likes = 0;

    return this.postRepository.save(post);
  }

  async findAll(): Promise<IResponse<Post[]>> {
    const posts = await this.postRepository.find();

    return {
      status: 200,
      msg: 'Found all posts',
      payload: posts,
    };
  }

  async findOne(id: number): Promise<IResponse<Post>> {
    const post = await this.postRepository.findOne({ where: { id: id } });

    return {
      status: 200,
      msg: 'Found all posts',
      payload: post,
    };
  }

  async like(id: number) {
    const post = await this.postRepository.findOne({ where: { id: id } });

    post.likes = post.likes + 1;

    return this.postRepository.save(post);
  }

  async delete(id: number) {
    return this.postRepository.delete(id);
  }
}
