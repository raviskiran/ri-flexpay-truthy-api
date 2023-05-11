import { Module } from '@nestjs/common';
import { CardHolderController } from './cardholder.controller';
import { CardHolderService } from './cardholder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardHolderRepository } from './cardholder.repository';
@Module({
  imports: [TypeOrmModule.forFeature([CardHolderRepository])],

  controllers: [CardHolderController],
  providers: [CardHolderService]
})
export class CardHolderModule {}
