import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CategoriesService } from '../categories/categories.service';
import { CreateItemDto, UpdateItemDto } from './item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item) private itemModel: typeof Item,
    private categoriesService: CategoriesService,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.findAll<Item>();
  }

  async findById(id: number): Promise<Item> {
    const item = await this.itemModel.findByPk(id);
    if (!item) throw new NotFoundException();
    return item;
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const { category } = createItemDto;

    let categoryId: number;

    if (typeof category === 'string') {
      const newCategory = await this.categoriesService.createCategory({
        name: category,
      });
      categoryId = newCategory.id;
    } else {
      categoryId = category;
    }

    try {
      const item = await this.itemModel.create({
        ...createItemDto,
        categoryId,
      });
      return item;
    } catch (error) {
      throw new NotFoundException('You need to provide a valid category');
    }
  }

  async updateItem(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    const [affectedRows, [item]] = await this.itemModel.update(updateItemDto, {
      where: { id },
      returning: true,
    });
    if (!affectedRows) {
      throw new NotFoundException('You need to provide a valid category');
    }
    return item;
  }

  async delete(id: number): Promise<Boolean> {
    const affected = await this.itemModel.destroy({ where: { id } });
    if (!affected) throw new NotFoundException('No item was deleted!');

    return true;
  }
}
