import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';
import * as XLSX from 'xlsx';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>
  ) {}

  async importCards(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetNameList = workbook.SheetNames;
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

    // Validate the Excel format before processing
    if (!this.isValidExcelFormat(data)) {
      throw new BadRequestException(
        'Invalid Excel file format. Please ensure the file contains the required columns.'
      );
    }

    for (const row of data) {
      const card = new Card();
      card.cardNumber = row['Card Number'];
      card.sequenceNumber = row['Sequence Number'];
      card.trackingNumber = row['Tracking Number'];

      await this.cardRepository.save(card);
    }

    return { message: 'Cards imported successfully' };
  }

  // Custom validation function
  private isValidExcelFormat(data: any[]): boolean {
    if (data.length === 0) {
      return false;
    }

    const requiredColumns = [
      'Card Number',
      'Sequence Number',
      'Tracking Number'
    ];
    const rowKeys = Object.keys(data[0]);

    return requiredColumns.every((column) => rowKeys.includes(column));
  }
}
