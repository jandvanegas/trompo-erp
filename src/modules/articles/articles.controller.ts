import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesInterface } from './articles.interface';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getArticles(): Promise<ArticlesInterface> {
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
  @Delete(':id')
  deleteArticles(@Param('id') id: string) {
    return this.articlesService.deleteArticles(id);
  }
}
