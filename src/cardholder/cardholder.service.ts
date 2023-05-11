import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardHolder } from './entities/cardholder.entity';
import * as soap from 'soap';
import { CardHolderRepository } from './cardholder.repository';

const traceId = () => `RI007${new Date().getTime()}`;
const wsdlURL =
  'https://sandbox.flexpay.co.za/fnds-webservices/v2.0/FlexpayFicaStandardService?wsdl';
const soapifiedRequest = (req: any) => {
  const creds = {
    traceId: traceId(),
    clientUsername: 'RETAIL_INSIGHTS_TEST',
    clientPassword: 'R3t@!1T3sTi8',
    cardId: '3525223',
    customerId: '2985'
  };
  const reqData = { ...req };
  delete reqData.email;
  return { arg0: { ...creds, ...reqData } };
};

@Injectable()
export class CardHolderService {
  constructor(
    @InjectRepository(CardHolderRepository)
    private readonly cardHolderRepository: CardHolderRepository
  ) {}

  async create(cardHolderData: any) {
    const client = await soap.createClientAsync(wsdlURL);

    const soapifiedReq = soapifiedRequest(cardHolderData);

    const res = await client.createCardholderAsync(soapifiedReq);
    console.log('response');

    console.log(res);

    const cardHolder: Partial<CardHolder> = {
      firstName: cardHolderData.cardholder.firstName,
      lastName: cardHolderData.cardholder.surname,
      phoneNumber: cardHolderData.cardholder.phone,
      passportId: cardHolderData.cardholder.primaryIdentity.number,
      additionalData: cardHolderData,
      dob: cardHolderData.cardholder.dob
    };
    if (res[0].return.responseMessage === 'Success') {
      await this.cardHolderRepository.save(cardHolder);
      return res.status(200).json(res.responseMessage);
    } else {
      throw new BadRequestException(res[0].return.responseMessage);
    }
  }

  async getCardHolder(id: number): Promise<CardHolder> {
    return this.cardHolderRepository.findOne(id);
  }

  async getAll(): Promise<CardHolder[]> {
    return this.cardHolderRepository.find();
  }

  // ... other methods
}
