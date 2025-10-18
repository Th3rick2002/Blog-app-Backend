import { IsEmpty, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsEmpty()
  @IsString()
  @MinLength(5)
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsString()
  image_url: string;

  @IsNotEmpty()
  @IsString()
  author: string;
}
