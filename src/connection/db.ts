import { DataSource } from 'typeorm';
import { Articles } from '../entities/Articles';
import { Categories } from '../entities/Categories';
import { Sales } from '../entities/Sales';
import { SalesDetail } from '../entities/SalesDetail';
import { Clients } from '../entities/Clients';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://alex:rEJFleNFCPPqfFsnJg8GLiEMjwHmth5N@dpg-chv363m7avjbv9tf8bm0-a.oregon-postgres.render.com/toctedb_waq3',
  ssl: {
    rejectUnauthorized: false, // Opcionalmente, si el certificado SSL no está verificado, establece esto en "true"
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
