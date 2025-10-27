import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CategoryService } from '../category/category.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly categoryService: CategoryService,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const category = await this.categoryService.findOne(
      createPostDto.categoryId,
    );
    if (!category) {
      throw new NotFoundException('Category is not found');
    }

    const post = this.postRepository.create({
      title: createPostDto.title,
      content: createPostDto.content,
      image_url: createPostDto.image_url,
      author: createPostDto.author,
      category,
    });

    try {
      return this.postRepository.save(post);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return this.postRepository.find({
      relations: {
        category: true,
      },
    });
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({ id_post: id });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
