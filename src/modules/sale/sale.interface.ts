import { ClientsInterface } from '../clients/clients.interface';

export interface SaleInterface {
  id: number;
  date: number;
  tax: number;
  total: number;
  state: boolean;
  client: ClientsInterface;
}
