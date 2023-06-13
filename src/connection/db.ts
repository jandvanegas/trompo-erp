import { DataSource } from 'typeorm';
import { Articles } from '../entities/Articles';
import { Categories } from '../entities/Categories';
import { Sales } from '../entities/Sales';
import { SalesDetail } from '../entities/SalesDetail';
import { Clients } from '../entities/Clients';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: `postgres://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}.oregon-postgres.render.com/${process.env.DATABASE_NAME}`,
  ssl: {
    rejectUnauthorized: false,
  },
  // host: process.env.DATABASE_HOST,
  // port: parseInt(process.env.DATABASE_PORT),
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE_NAME,
  entities: [Articles, Categories, Sales, SalesDetail, Clients],
  logging: true,
  synchronize: true,
});
