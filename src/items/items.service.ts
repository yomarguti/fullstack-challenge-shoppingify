import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';
import { CreateItemDto, UpdateItemDto } from './item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
    private categoriesService: CategoriesService,
  ) {}

  async findAll() {
    /*     return await this.itemsRepository
      .createQueryBuilder('item')
      .leftJoin('item.category', 'category')
      .groupBy('category.name')
      .addGroupBy('category.id')
      .addGroupBy('item.id')
      .getRawMany(); */
    return this.itemsRepository.find();
  }

  async findById(id: string): Promise<Item> {
    const item = await this.itemsRepository.findOne(id);
    if (!item) throw new NotFoundException();
    return item;
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const item = this.itemsRepository.create(createItemDto);
    const category = await this.categoriesService.findById(
      createItemDto.categoryId,
    );

    if (!category) {
      throw new NotFoundException('You need to provide a valid category');
    }

    item.category = category;

    await this.itemsRepository.save(item);
    return item;
  }

  async updateItem(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    const { categoryId } = updateItemDto;

    const item = await this.findById(id);
    this.itemsRepository.merge(item, updateItemDto);

    if (categoryId) {
      const category = await this.categoriesService.findById(categoryId);
      if (!category) {
        throw new NotFoundException('You need to provide a valid category');
      }

      item.category = category;
    }

    return this.itemsRepository.save(item);
  }

  async delete(id: string): Promise<Boolean> {
    const { affected } = await this.itemsRepository.delete(id);
    if (!affected) throw new NotFoundException();

    return true;
  }
}
