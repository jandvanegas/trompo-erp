import { Injectable } from '@nestjs/common';
import { Clients } from '../../entities/Clients';

@Injectable()
export class ClientsService {
  getClients(): Promise<any> {
    const clients = Clients.find();
    return clients;
  }
  async postClients(body: any): Promise<Object> {
    try {
      const {
        name,
        email,
        phone,
        address,
        city,
        country,
        birthDate,
        gender,
        active,
      } = body;
      const clients = new Clients();
      clients.name = name;
      clients.email = email;
      clients.phone = phone;
      clients.address = address;
      clients.city = city;
      clients.country = country;
      clients.birthDate = birthDate;
      clients.gender = gender;
      clients.active = active;

      await clients.save();
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
  async putClients(body: any): Promise<Object> {
    try {
      const {
        id,
        name,
        email,
        phone,
        address,
        city,
        country,
        birthDate,
        gender,
        active,
      } = body;
      const clients = new Clients();
      clients.id = id;
      clients.name = name;
      clients.email = email;
      clients.phone = phone;
      clients.address = address;
      clients.city = city;
      clients.country = country;
      clients.birthDate = birthDate;
      clients.gender = gender;
      clients.active = active;

      await Clients.update(id, clients);
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
  async deleteClients(body: any) {
    try {
      const { id } = body;
      await Clients.delete(id);
      return { status: 'ok' };
    } catch (error) {
      return { status: 'Error' };
    }
  }
}
