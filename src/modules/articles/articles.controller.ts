import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesInterface } from './articles.interface';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getArticles(): Promise<ArticlesInterface> {
    return this.articlesService.getArticles();
  }
  @Post()
  postArticles(@Body() body: ArticlesInterface): Promise<Object> {
    return this.articlesService.postArticles(body);
  }
  @Put()
  putArticles(@Body() body: ArticlesInterface): Promise<Object> {
    return this.articlesService.putArticles(body);
  }
  @Delete()
  deleteArticles(@Body() body: ArticlesInterface): Promise<Object> {
    return this.articlesService.deleteArticles(body);
  }
}
