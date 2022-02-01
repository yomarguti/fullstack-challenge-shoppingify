import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListController } from './shopping-list.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShoppingList } from './shopping-list.entity';
import { ShopItem } from './shop-item.entity';

@Module({
  imports: [SequelizeModule.forFeature([ShoppingList, ShopItem])],
  providers: [ShoppingListService],
  controllers: [ShoppingListController],
})
export class ShoppingListModule {}
