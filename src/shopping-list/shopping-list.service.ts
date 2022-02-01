import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateShoppingListDto } from './shopping-list.dto';
import { ShoppingList } from './shopping-list.entity';

@Injectable()
export class ShoppingListService {
  constructor(
    @InjectModel(ShoppingList)
    private shopListModel: typeof ShoppingList,
    private sequelize: Sequelize,
  ) {}

  async create(
    createShoppingListDto: CreateShoppingListDto,
  ): Promise<ShoppingList> {
    const { name, items } = createShoppingListDto;

    try {
      return await this.sequelize.transaction(async (t) => {
        const shopList = await this.shopListModel.create(
          { name },
          { transaction: t },
        );

        const arrayPromises = items.map(({ itemId, pieces }) =>
          shopList.$add<ShoppingList>('items', itemId, {
            through: { pieces },
            transaction: t,
          }),
        ) as Promise<ShoppingList>[];

        await Promise.all(arrayPromises);

        return shopList;
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
