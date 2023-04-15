import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { CardRepository } from './card.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CardRepository])],

  controllers: [CardController],
  providers: [CardService]
})
export class CardModule {}
