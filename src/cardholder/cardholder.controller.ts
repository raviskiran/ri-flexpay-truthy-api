import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { Response } from 'express';

import { CardHolderService } from './cardholder.service';
import { CardHolder } from './entities/cardholder.entity';

@Controller('card-holders')
export class CardHolderController {
  constructor(private readonly cardHolderService: CardHolderService) {}

  @Post('create')
  async create(
    @Body() cardHolderData: Partial<CardHolder>,
    @Res() res: Response
  ) {
    await this.cardHolderService.create(cardHolderData);
    return res.status(200).json('Success');
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
