import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalesDetail } from './SalesDetail';
import { SaleInterface } from '../modules/sale/sale.interface';

@Entity()
export class Sales extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: number;

  @Column()
  tax: number;

  @Column()
  total: number;

  @Column()
  state: boolean;

  @OneToMany((type) => SalesDetail, (salesDetail) => salesDetail.idSales)
  salesDetail: SalesDetail[];
}
