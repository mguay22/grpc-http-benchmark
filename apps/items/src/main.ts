import { NestFactory } from '@nestjs/core';
import { ItemsModule } from './items.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(ItemsModule);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: 'items',
      url: 'localhost:5001',
      protoPath: join(__dirname, 'items.proto'),
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
