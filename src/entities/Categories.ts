import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Articles } from './Articles';

@Entity()
export class Categories extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  name: String;

  @Column()
  description: String;

  @Column()
  state: Boolean;

  @OneToMany(() => Articles, (articles) => articles.categories)
  // @JoinColumn({ name: 'article_id' })
  articles: Articles[];
}
