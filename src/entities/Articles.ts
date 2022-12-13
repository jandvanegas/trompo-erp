import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { Categories } from './Categories';

@Entity()
export class Articles extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @ManyToOne(() => Categories, (categories) => categories.articles)
  @JoinColumn({ name: 'categories_id' })
  categories: Categories;

  @Column()
  code: String;

  @Column()
  name: String;

  @Column()
  salePrice: Number;

  @Column()
  stock: Number;

  @Column()
  description: String;

  @Column()
  image: Number;

  @Column()
  state: Boolean;
}
