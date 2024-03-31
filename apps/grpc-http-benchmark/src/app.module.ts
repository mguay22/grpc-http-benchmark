import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ITEMS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5001',
          package: 'items',
          protoPath: join(__dirname, 'items.proto'),
        },
      },
    ]),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
