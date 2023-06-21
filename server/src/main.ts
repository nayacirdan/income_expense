import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //To request with localhost:3001/api/[route]
  app.setGlobalPrefix('api');
  //Todo: Add only FE port
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
