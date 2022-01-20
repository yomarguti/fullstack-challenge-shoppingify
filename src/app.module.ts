import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseModule } from './database-module/database.module';

@Module({
  imports: [DatabaseModule, ItemsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
