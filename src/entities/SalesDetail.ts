import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,ManyToOne
} from 'typeorm';
import { Sales } from './Sales';
import { Articles } from './Articles';
@Entity()
export class SalesDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @ManyToOne(type => Articles, articles => articles.salesDetail)
  idArticle: Articles;

  @OneToMany((type) => Sales, (sales) => sales.salesDetail)
  idSales: Sales[];

  @Column()
  amount: Number;

  @Column()
  price: Number;

  @Column()
  discount: Number;
}
