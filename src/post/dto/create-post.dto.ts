import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { Category } from '../../category/entities/category.entity';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsString()
  @IsOptional()
  image_url: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  category: Category;
}
