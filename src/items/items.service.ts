import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto, UpdateItemDto } from './item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  async findById(id: string): Promise<Item> {
    const item = await this.itemsRepository.findOne(id);
    if (!item) throw new NotFoundException();
    return item;
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const item = this.itemsRepository.create(createItemDto);
    await this.itemsRepository.save(item);
    return item;
  }

  async updateItem(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    const item = await this.findById(id);
    this.itemsRepository.merge(item, updateItemDto);
    return this.itemsRepository.save(item);
  }

  async delete(id: string): Promise<Boolean> {
    const { affected } = await this.itemsRepository.delete(id);
    if (!affected) throw new NotFoundException();

    return true;
  }
}
