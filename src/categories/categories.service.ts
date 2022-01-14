import { Inject, Injectable } from '@nestjs/common';
import { CATEGORIES_REPOSITORY } from '../constants';
import { Item } from '../items/item.entity';
import { CreateCategoryDto } from './category.dto';
import { Category } from './category.entity';
//import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CATEGORIES_REPOSITORY)
    private categoriesRepository: typeof Category,
  ) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return await this.categoriesRepository.create(createCategoryDto);
  }

  findAll(): Promise<Category[]> {
    return this.categoriesRepository.findAll({
      limit: 4,
      include: [
        {
          model: Item,
          limit: 8,
        },
      ],
    });
  }

  findById(id: number): Promise<Category> {
    return this.categoriesRepository.findByPk(id);
  }
}
