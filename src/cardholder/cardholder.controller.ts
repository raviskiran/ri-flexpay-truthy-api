import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CardHolderService } from './cardholder.service';
import { CardHolder } from './entities/cardholder.entity';

@Controller('card-holders')
export class CardHolderController {
  constructor(private readonly cardHolderService: CardHolderService) {}

  @Post()
  async create(
    @Body() cardHolderData: Partial<CardHolder>
  ): Promise<CardHolder> {
    return this.cardHolderService.create(cardHolderData);
  }

  @Get(':id')
  async getCardHolder(@Param('id') id: number): Promise<CardHolder> {
    return this.cardHolderService.getCardHolder(id);
  }

  @Get()
  async getAll(): Promise<CardHolder[]> {
    return this.cardHolderService.getAll();
  }
}
