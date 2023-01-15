import { CategoriesInterface } from '../categories/categories.interface';
export interface ArticlesInterface {
  id: number;
  categories: CategoriesInterface;
  code: string;
  name: string;
  salePrice: number;
  stock: number;
  description: string;
  image: number;
  state: boolean;
}
