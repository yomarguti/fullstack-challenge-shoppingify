import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { CategoriesModule } from '../categories/categories.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './item.entity';

@Module({
  providers: [ItemsService],
  controllers: [ItemsController],
  imports: [SequelizeModule.forFeature([Item]), CategoriesModule],
})
export class ItemsModule {}
