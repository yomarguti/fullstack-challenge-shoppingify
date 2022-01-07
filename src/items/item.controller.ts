import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateItemDto } from './dtos/create-item.dto';
import { ItemsService } from './item.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  findAll(): string {
    return 'Item1, Item2, Item3';
  }

  @Get('/:id')
  findById(@Param('id') id: string): string {
    return `Item ${id}`;
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createItem(createItemDto);
  }

  @Patch('/:id')
  updateItem(@Param('id') id: string, itemData: string): string {
    console.log('itemData:', itemData);
    return `Item ${id} updated`;
  }

  @Delete('/:id')
  deleteItem(@Param('id') id: string): string {
    return `Item ${id} deleted`;
  }
}
