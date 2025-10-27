import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

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
  @IsInt()
  @Type(() => Number)
  categoryId: number;
}
