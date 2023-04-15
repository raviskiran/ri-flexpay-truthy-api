import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardHolder } from './entities/cardholder.entity';
import * as soap from 'soap';

@Injectable()
export class CardHolderService {
  constructor(
    @InjectRepository(CardHolder)
    private readonly cardHolderRepository: Repository<CardHolder>
  ) {}

  async create(cardHolderData: Partial<CardHolder>): Promise<CardHolder> {
    const soapClient = await soap.createClientAsync(
      'https://your-soap-api-endpoint?wsdl'
    );

    // Prepare the input parameters for the SOAP API call
    const soapInput = {
      // Fill in the input parameters based on your SOAP API requirements
    };

    // Call the SOAP API method
    //  const soapResponse = await soapClient.mySoapMethodAsync(soapInput);

    // Process the SOAP response and extract the data needed for your CardHolder
    const extractedData = {
      // Extract the data from the SOAP response
    };

    const cardHolder = this.cardHolderRepository.create({
      ...cardHolderData,
      ...extractedData
    });
    return this.cardHolderRepository.save(cardHolder);
  }

  async getCardHolder(id: number): Promise<CardHolder> {
    return this.cardHolderRepository.findOne(id);
  }

  async getAll(): Promise<CardHolder[]> {
    return this.cardHolderRepository.find();
  }

  // ... other methods
}
