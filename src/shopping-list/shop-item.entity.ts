import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Item } from '../items/item.entity';
import { ShoppingList } from './shopping-list.entity';

@Table
export class ShopItem extends Model {
  @Column({ type: DataType.INTEGER, allowNull: false })
  pieces: number;

  @ForeignKey(() => Item)
  @Column({ type: DataType.INTEGER, allowNull: false })
  itemId: number;

  @ForeignKey(() => ShoppingList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  shoppingListId: number;
}
