import { Injectable } from '@nestjs/common';
import { SalesDetail } from '../../entities/SalesDetail';
@Injectable()
export class SalesDetailService {
  getSalesDetail(): Promise<any> {
    const salesDetail = SalesDetail.find();
    return salesDetail;
  }
  async postSalesDetail(body: any): Promise<Object> {
    try {
      const { idArticle, idSales, amount, price } = body;
      const salesDetail = new SalesDetail();
      salesDetail.idArticle = idArticle;
      salesDetail.idSales = idSales;
      salesDetail.amount = amount;
      salesDetail.price = price;
      await salesDetail.save();
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
  async putSalesDetail(body: any): Promise<Object> {
    try {
      const { id, idArticle, idSales, amount, price } = body;
      await SalesDetail.update(id, {
        idArticle,
        idSales,
        amount,
        price,
      });
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
  async deleteSalesDetail(body: any): Promise<Object> {
    try {
      const { id } = body;
      await SalesDetail.delete(id);
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
}
