import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { Category } from '../categories/category.entity';
import { CreateItemDto, UpdateItemDto } from './item.dto';
import { Item } from './item.entity';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(
    private itemsService: ItemsService,
    private categoriesService: CategoriesService,
  ) {}

  @Get()
  findAllGroupByCategories(): Promise<Category[]> {
    return this.categoriesService.findItemsGroupByCategories();
  }

  @Get('/:id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Item> {
    return this.itemsService.findById(id);
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(createItemDto);
  }

  @Patch('/:id')
  updateItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<Item> {
    return this.itemsService.updateItem(id, updateItemDto);
  }

  @Delete('/:id')
  deleteItem(@Param('id', ParseIntPipe) id: number): Promise<Boolean> {
    return this.itemsService.delete(id);
  }
}
