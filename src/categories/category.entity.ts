import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  PrimaryKey,
  Table,
  Unique,
  Model,
} from 'sequelize-typescript';

import { Item } from 'src/items/item.entity';

@Table
export class Category extends Model {
  @AutoIncrement
  @Unique(true)
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Item)
  items: Item[];
}
