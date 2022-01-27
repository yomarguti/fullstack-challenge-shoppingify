import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from '../categories/category.entity';

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
}
