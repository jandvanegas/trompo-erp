import { Injectable } from '@nestjs/common';
import { Articles } from '../../entities/Articles';
import { Categories } from '../../entities/Categories';
import { ArticlesInterface } from './articles.interface';

@Injectable()
export class ArticlesService {
  getArticles(): Promise<any> {
    const articles = Articles.find();
    return articles;
  }
  async postArticles(body: any): Promise<Object> {
    try {
      const {
        categories,
        code,
        name,
        salePrice,
        stock,
        description,
        image,
        state,
      } = body;
      const articles = new Articles();
      articles.categories = categories;
      articles.code = code;
      articles.name = name;
      articles.salePrice = salePrice;
      articles.stock = stock;
      articles.description = description;
      articles.image = image;
      articles.state = state;

      await articles.save();
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
  async putArticles(body: any): Promise<Object> {
    try {
      const {
        id,
        categories,
        code,
        name,
        salePrice,
        stock,
        description,
        image,
        state,
      } = body;
      await Articles.update(id, {
        categories,
        code,
        name,
        salePrice,
        stock,
        description,
        image,
        state,
      });
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
  async deleteArticles(id: string): Promise<Object> {
    try {
      await Articles.delete(id);
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
}
