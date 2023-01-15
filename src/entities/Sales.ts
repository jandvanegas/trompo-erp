import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { SalesDetail } from './SalesDetail';
@Entity()
export class Sales extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  idUser: Number;

  @Column()
  date: Number;

  @Column()
  tax: Number;

  @Column()
  total: Number;

  @Column()
  idState: Number;

  @ManyToOne((type) => SalesDetail, (salesDetail) => salesDetail.idSales)
  salesDetail: SalesDetail[];
}
