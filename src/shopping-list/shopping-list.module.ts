import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListController } from './shopping-list.controller';
import { ShoppingListProviders } from './shopping-list.provider';

@Module({
  providers: [ShoppingListService, ...ShoppingListProviders],
  controllers: [ShoppingListController],
})
export class ShoppingListModule {}
