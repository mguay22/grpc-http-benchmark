import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('items')
export class ItemsController {
  @Get()
  getHello() {
    return { id: '123', name: 'item' };
  }

  @GrpcMethod('ItemsService', 'FindOne')
  getItemGrpc() {
    return { id: '123', name: 'item' };
  }
}
