import { DataSource } from 'typeorm';
import { Articles } from '../entities/Articles';
import { Categories } from '../entities/Categories';
import { Sales } from '../entities/Sales';
import { SalesDetail } from '../entities/SalesDetail';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Articles, Categories, Sales, SalesDetail],
  logging: true,
  synchronize: true,
});
