import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesInterface } from './categories.interface';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly appService: CategoriesService) {}

  @Get()
  getCategory(): Promise<CategoriesInterface> {
    return this.appService.getCategory();
  }
  @Post()
  postCategory(@Body() body: CategoriesInterface): Promise<Object> {
    return this.appService.postCategory(body);
  }
  @Put()
  putCategory(@Body() body: CategoriesInterface): Promise<Object> {
    return this.appService.putCategory(body);
  }
  @Delete()
  deleteCategory(@Body() body: CategoriesInterface): Promise<Object> {
    return this.appService.deleteCategory(body);
  }
}
