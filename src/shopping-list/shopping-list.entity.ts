import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Item } from '../items/item.entity';
import { ShopItem } from './shop-item.entity';

@Table
export class ShoppingList extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({
    type: DataType.ENUM('COMPLETED', 'CANCELLED'),
    defaultValue: 'COMPLETED',
    allowNull: false,
  })
  status: ShoppingListStatus;

  @BelongsToMany(() => Item, () => ShopItem)
  items: Item[];
}
