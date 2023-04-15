import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Res,
  Get
} from '@nestjs/common';
import { Response } from 'express';
import { Card } from './entities/card.entity';

import { FileInterceptor } from '@nestjs/platform-express';
import { CardService } from './card.service';
@Controller('card')
export class CardController {
  constructor(private readonly cardsService: CardService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response
  ) {
    const result = await this.cardsService.importCards(file);
    return res.status(200).json(result);
  }

  @Get('unallocated')
  async getUnallocatedCards(): Promise<Card[]> {
    return this.cardsService.getUnallocatedCards();
  }
}
