import { Injectable } from '@nestjs/common';
import { Categories } from '../../entities/Categories';
import { CategoriesInterface } from './categories.interface';

@Injectable()
export class CategoriesService {
  getCategory(): Promise<any> {
    const categories = Categories.find();
    return categories;
  }
  async postCategory(body: CategoriesInterface): Promise<Object> {
    try {
      const { name, description, state } = body;
      const category = new Categories();
      category.name = name;
      category.description = description;
      category.state = state;
      await category.save();
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
  async putCategory(body: CategoriesInterface): Promise<Object> {
    try {
      const { id, name, description, state } = body;
      await Categories.update(id, { name, description, state });
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
  async deleteCategory(body: CategoriesInterface): Promise<Object> {
    try {
      const { id } = body;
      await Categories.delete(id);
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
}
