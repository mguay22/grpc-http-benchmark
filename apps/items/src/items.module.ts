import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';

@Module({
  imports: [],
  controllers: [ItemsController],
})
export class ItemsModule {}
