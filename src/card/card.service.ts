import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';
import * as XLSX from 'xlsx';
import { CardRepository } from './card.repository';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardRepository)
    private readonly cardRepository: CardRepository
  ) {}

  async getUnallocatedCards(): Promise<Card[]> {
    return this.cardRepository.getUnallocatedCards();
  }
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
      card.cardNumber = row['card_id'];
      card.statusId = row['status_id'];
      card.customerId = row['customer_id'];
      card.plastic = row['Plastic'];
      card.sequenceNumber = row['card_id'];
      card.allocated = 'false';
      card.trackingNumber = row['card_id'];

      //   card.sequenceNumber = row['Sequence Number'];
      //   card.trackingNumber = row['Tracking Number'];

      await this.cardRepository.save(card);
    }

    return { message: 'Cards imported successfully' };
  }

  // Custom validation function
  private isValidExcelFormat(data: any[]): boolean {
    if (data.length === 0) {
      return false;
    }

    const requiredColumns = ['card_id', 'status_id', 'customer_id', 'Plastic'];
    const rowKeys = Object.keys(data[0]);

    return requiredColumns.every((column) => rowKeys.includes(column));
  }
}
