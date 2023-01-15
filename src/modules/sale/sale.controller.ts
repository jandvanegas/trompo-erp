import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleInterface } from './sale.interface';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService:SaleService) {}

  @Get()
  getSales(): Promise<SaleInterface> {
    return this.saleService.getSales();
  }
  @Post()
  postSales(@Body() body: SaleInterface): Promise<Object> {
    return this.saleService.postSales(body);
  }

  @Put()
  putSales(@Body() body: SaleInterface): Promise<Object> {
    return this.saleService.putSales(body);
  }

  @Delete()
  deleteSales(@Body() body: SaleInterface): Promise<Object> {
    return this.saleService.deleteSales(body);
  }
}
