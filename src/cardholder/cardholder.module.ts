import { Module } from '@nestjs/common';
import { CardholderController } from './cardholder.controller';
import { CardholderService } from './cardholder.service';

@Module({
  controllers: [CardholderController],
  providers: [CardholderService]
})
export class CardholderModule {}
