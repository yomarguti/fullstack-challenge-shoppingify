import { Category } from 'src/categories/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  stock: number;

  @ManyToOne((type) => Category, (category) => category.items, { eager: true })
  category: Category;
}
