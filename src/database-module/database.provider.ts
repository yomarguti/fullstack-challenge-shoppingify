import { Sequelize } from 'sequelize-typescript';
import { Category } from '../categories/category.entity';
import { SEQUELIZE } from '../constants';
import { Item } from '../items/item.entity';
import { ShopItem } from '../shopping-list/shop-item.entity';
import { ShoppingList } from '../shopping-list/shopping-list.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'shoppingify-seq',
        logging: false,
      });
      sequelize.addModels([Item, Category, ShopItem, ShoppingList]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
