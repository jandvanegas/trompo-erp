import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SalesDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  idSale: Number;

  @Column()
  idArticle: Number;

  @Column()
  amount: Number;

  @Column()
  price: Number;

  @Column()
  discount: Number;
}
