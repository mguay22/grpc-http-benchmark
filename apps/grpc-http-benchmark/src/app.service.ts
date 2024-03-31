import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  private itemsService: any;

  constructor(@Inject('ITEMS_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.itemsService = this.client.getService('ItemsService');
  }

  async getItemHttp() {
    return (await fetch('http://localhost:3001/items')).json();
  }

  getItemGrpc() {
    return this.itemsService.FindOne({ id: 123 });
  }
}
