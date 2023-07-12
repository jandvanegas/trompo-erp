import { Injectable } from '@nestjs/common';
import { Sales } from '../../entities/Sales';
import { SaleInterface } from './sale.interface';

@Injectable()
export class SaleService {
  async getSales(): Promise<Sales[]> {
    const sales = await Sales.find();
    return sales;
  }

  async postSales(body: SaleInterface): Promise<Object> {
    try {
      const { id, date, tax, total, state } = body;
      const sale = new Sales();
      sale.id = id;
      sale.date = date;
      sale.tax = tax;
      sale.total = total;
      sale.state = state;

      await sale.save();
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }

  async putSales(body: SaleInterface): Promise<Object> {
    try {
      const { id, date, tax, total, state } = body;
      await Sales.update(id, {
        date,
        tax,
        total,
        state,
      });
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }

  async deleteSales(id: string): Promise<Object> {
    try {
      await Sales.delete(id);
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
}
