import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseModule } from './database-module/database.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [DatabaseModule, ItemsModule, CategoriesModule, ShoppingListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
