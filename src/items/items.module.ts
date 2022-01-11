import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { Item } from './item.entity';
import { ItemsService } from './items.service';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item]), CategoriesModule],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
