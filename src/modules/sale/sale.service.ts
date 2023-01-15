import { Injectable } from '@nestjs/common';
import { Sales } from '../../entities/Sales';
import { SaleInterface } from './sale.interface';

@Injectable()
export class SaleService {
  getSales(): Promise<any> {
    const articles = Sales.find();
    return articles;
  }
  async postSales(body: any): Promise<Object> {
    try {
      const { idUser, date, tax, total, idState } = body;
      const sales = new Sales();
      sales.idUser = idUser;
      sales.date = date;
      sales.tax = tax;
      sales.total = total;
      sales.idState = idState;

      await sales.save();
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }

  async putSales(body: any): Promise<Object> {
    try {
      const { id, idUser, date, tax, total, idState } = body;
      await Sales.update(id, {
        idUser,
        date,
        tax,
        total,
        idState,
      });
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
  async deleteSales(body: SaleInterface): Promise<Object> {
    try {
      const { id } = body;
      Sales.delete(id);
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
}
