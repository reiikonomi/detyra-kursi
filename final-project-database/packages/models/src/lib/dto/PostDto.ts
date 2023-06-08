import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PostDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  likes?: number;
}
