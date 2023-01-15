import {  Body, Controller, Get, Post  } from '@nestjs/common';
import { ArticlesService } from './articles.service';
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @Get()
  getArticles(): string {
    return this.articlesService.getArticles();
  }
}
