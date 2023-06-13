import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './connection/db';
import { config } from 'dotenv';
config();

async function bootstrap() {
  AppDataSource.initialize()
    .then(() => {
      console.log('Connection Success');
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
