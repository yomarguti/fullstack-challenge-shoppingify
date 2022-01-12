import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { categoriesProviders } from './categories.provider';
import { DatabaseModule } from '../database-module/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CategoriesService, ...categoriesProviders],
  controllers: [CategoriesController],
  //exports: [CategoriesService],
})
export class CategoriesModule {}
