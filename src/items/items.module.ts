import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { itemsProviders } from './items.providers';
//import { CategoriesModule } from '../categories/categories.module';

@Module({
  providers: [ItemsService, ...itemsProviders],
  controllers: [ItemsController],
})
export class ItemsModule {}
