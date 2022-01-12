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
  title: string;

  @Column({ type: DataType.REAL })
  price: number;

  @Column({ type: DataType.INTEGER })
  stock: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
