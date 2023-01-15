import { SaleInterface } from '../sale/sale.interface';
import { ArticlesInterface } from '../articles/articles.interface';

export interface SalesDetailInterface {
  id: number;
  sale: SaleInterface;
  articles: ArticlesInterface;
  amount: number;
  price: number;
  discount: number;
}
