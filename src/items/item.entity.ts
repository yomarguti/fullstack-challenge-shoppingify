import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from '../categories/category.entity';
import { ShopItem } from '../shopping-list/shop-item.entity';
import { ShoppingList } from '../shopping-list/shopping-list.entity';

@Table
export class Item extends Model {
  @Column
  name: string;

  @Column({ type: DataType.TEXT })
  note?: string;

  @Column({ type: DataType.STRING })
  image?: string;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @BelongsToMany(() => ShoppingList, () => ShopItem)
  shoppingLists: ShoppingList[];
}
