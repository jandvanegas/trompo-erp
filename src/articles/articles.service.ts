import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  getArticles(): string {
    
    return 'HOLA TOCTE!!!';
  }
}
