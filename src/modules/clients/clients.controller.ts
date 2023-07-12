import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsInterface } from './clients.interface';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async getClients(): Promise<ClientsService> {
    return this.clientsService.getClients();
  }

  @Post()
  async postClients(@Body() body: ClientsInterface): Promise<Object> {
    return this.clientsService.postClients(body);
  }

  @Put()
  putClients(@Body() body: ClientsInterface): Promise<Object> {
    return this.clientsService.putClients(body);
  }
  @Delete()
  deleteClients(@Param('id') id: string) {
    return this.clientsService.deleteClients(id);
  }
}
