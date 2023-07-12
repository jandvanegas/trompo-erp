import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleInterface } from './sale.interface';
import { Sales } from 'src/entities/Sales';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get()
  getSales(): Promise<Sales[]> {
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
  deleteSales(@Param('id') id: string) {
    return this.saleService.deleteSales(id);
  }
}
