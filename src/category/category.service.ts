import { HttpException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly CategoryEntity: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    createCategoryDto.title = createCategoryDto.title.toLowerCase();
    try {
      return this.CategoryEntity.save(createCategoryDto);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return this.CategoryEntity.find();
  }

  findOne(id: number) {
    return this.CategoryEntity.findOneBy({ id_category: id });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.CategoryEntity.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return this.CategoryEntity.delete(id);
  }
}
