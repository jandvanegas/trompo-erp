import { Module } from '@nestjs/common';
import { CategoriesController } from './modules/categories/categories.controller';
import { CategoriesService } from './modules/categories/categories.service';
import { ArticlesService } from './modules/articles/articles.service';
import { ArticlesController } from './modules/articles/articles.controller';
import { SalesDetailController } from './modules/sales-detail/sales-detail.controller';
import { SalesDetailService } from './modules/sales-detail/sales-detail.service';
import { SaleController } from './modules/sale/sale.controller';
import { SaleService } from './modules/sale/sale.service';
import { ClientsService } from './modules/clients/clients.service';
import { ClientsController } from './modules/clients/clients.controller';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
    }),
  ],
  controllers: [
    ArticlesController,
    CategoriesController,
    SalesDetailController,
    SaleController,
    ClientsController,
  ],
  providers: [
    ArticlesService,
    CategoriesService,
    SalesDetailService,
    SaleService,
    ClientsService,
  ],
})
export class AppModule {}
