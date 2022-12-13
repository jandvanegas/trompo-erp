import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}
