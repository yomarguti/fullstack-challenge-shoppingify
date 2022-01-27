import { Inject, Injectable } from '@nestjs/common';
import { CreateShoppingListDto } from './shopping-list.dto';
import { ShoppingList } from './shopping-list.entity';

@Injectable()
export class ShoppingListService {
  constructor(
    @Inject('SHOPPING_LIST_REPOSITORY')
    private shoplistRepository: typeof ShoppingList,
  ) {}

  async create(
    createShoppingListDto: CreateShoppingListDto,
  ): Promise<ShoppingList> {
    const { name, items } = createShoppingListDto;
    const shopList = await this.shoplistRepository.create({ name });

    const arrayPromises = items.map(({ itemId, pieces }) =>
      shopList.$add<ShoppingList>('items', itemId, { through: { pieces } }),
    ) as Promise<ShoppingList>[];

    await Promise.all(arrayPromises);

    return shopList;
  }
}
