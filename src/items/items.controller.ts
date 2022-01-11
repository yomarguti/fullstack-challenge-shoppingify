import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateItemDto, UpdateItemDto } from './item.dto';
import { Item } from './item.entity';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findById(id);
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(createItemDto);
  }

  @Patch('/:id')
  updateItem(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<Item> {
    return this.itemsService.updateItem(id, updateItemDto);
  }

  @Delete('/:id')
  deleteItem(@Param('id') id: string): Promise<Boolean> {
    return this.itemsService.delete(id);
  }
}
