import { Module } from '@nestjs/common';
import { CardHolderController } from './cardholder.controller';
import { CardHolderService } from './cardholder.service';

@Module({
  controllers: [CardHolderController],
  providers: [CardHolderService]
})
export class CardholderModule {}
