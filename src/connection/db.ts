import { DataSource } from 'typeorm';
import { Articles } from '../entities/Articles';
import { Categories } from '../entities/Categories';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  entities: [Articles, Categories],
  logging: true,
  synchronize: true,
});
