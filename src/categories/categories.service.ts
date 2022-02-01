import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from '../items/item.entity';
import { CreateCategoryDto } from './category.dto';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return await this.categoryModel.create(createCategoryDto);
  }

  findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }

  findItemsGroupByCategories(): Promise<Category[]> {
    return this.categoryModel.findAll({
      include: [
        {
          model: Item,
        },
      ],
    });
  }

  findById(id: number): Promise<Category> {
    return this.categoryModel.findByPk(id);
  }
}
