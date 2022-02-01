import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShoppingListDto } from './shopping-list.dto';
import { ShoppingList } from './shopping-list.entity';

@Injectable()
export class ShoppingListService {
  constructor(
    @InjectModel(ShoppingList)
    private shopListModel: typeof ShoppingList,
  ) {}

  async create(
    createShoppingListDto: CreateShoppingListDto,
  ): Promise<ShoppingList> {
    const { name, items } = createShoppingListDto;
    const shopList = await this.shopListModel.create({ name });

    const arrayPromises = items.map(({ itemId, pieces }) =>
      shopList.$add<ShoppingList>('items', itemId, { through: { pieces } }),
    ) as Promise<ShoppingList>[];

    await Promise.all(arrayPromises);

    return shopList;
  }
}
