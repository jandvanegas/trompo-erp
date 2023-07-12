import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SalesDetailService } from './sales-detail.service';
import { SalesDetailInterface } from './sales-detail.interface';

@Controller('sales-detail')
export class SalesDetailController {
  constructor(private readonly salesDetailService: SalesDetailService) {}

  @Get()
  getSalesDetail(): Promise<SalesDetailInterface> {
    return this.salesDetailService.getSalesDetail();
  }

  @Post()
  postSalesDetail(@Body() body: SalesDetailInterface): Promise<Object> {
    return this.salesDetailService.postSalesDetail(body);
  }

  @Put()
  putSalesDetail(@Body() body: SalesDetailInterface): Promise<Object> {
    return this.salesDetailService.putSalesDetail(body);
  }

  @Delete()
  deleteSalesDetail(@Param('id') id: string): Promise<Object> {
    return this.salesDetailService.deleteSalesDetail(id);
  }
}
