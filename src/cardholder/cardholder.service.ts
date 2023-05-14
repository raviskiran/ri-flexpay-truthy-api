import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CardHolder } from './entities/cardholder.entity';
import * as soap from 'soap';
import { CardHolderRepository } from './cardholder.repository';
import { CardRepository } from 'src/card/card.repository';

const traceId = () => `RI007${new Date().getTime()}`;
const wsdlURL =
  'https://sandbox.flexpay.co.za/fnds-webservices/v2.0/FlexpayFicaStandardService?wsdl';
const soapifiedRequest = (req: any, card: any) => {
  const creds: any = {
    traceId: traceId(),
    clientUsername: 'RETAIL_INSIGHTS_TEST',
    clientPassword: 'R3t@!1T3sTi8',
    customerId: '2985'
  };

  const reqData = { ...req };
  delete reqData.email;
  console.log(' **************** ');

  console.log(card?.cardHolder);

  console.log(' **************** ');

  console.log(card?.cardHolder?.newCardholderId);

  console.log(' **************** ');

  if (card?.cardHolder?.newCardholderId) {
    creds.cardholderId = card.cardHolder.newCardholderId;
    delete reqData.cardId;
    delete reqData.cardholderId;
  }
  return { arg0: { ...creds, ...reqData } };
};

@Injectable()
export class CardHolderService {
  constructor(
    @InjectRepository(CardHolderRepository)
    private readonly cardHolderRepository: CardHolderRepository,
    private readonly cardRepository: CardRepository
  ) {}

  async create(cardHolderData: any) {
    console.log(cardHolderData);
    let response = 'Success';
    let soapRes = [];
    const card = await this.cardRepository.findOne(
      { cardNumber: cardHolderData.cardId },
      {
        relations: ['cardHolder']
      }
    );

    console.log(card);
    const cardHolder: Partial<CardHolder> = {
      firstName: cardHolderData.cardholder.firstName,
      lastName: cardHolderData.cardholder.surname,
      phoneNumber:
        cardHolderData.cardholder.phone ||
        cardHolderData.cardholder.mobile ||
        9999999,
      passportId: cardHolderData.cardholder.primaryIdentity.number,
      additionalData: cardHolderData,
      dob: cardHolderData.cardholder.dob,
      id: cardHolderData.cardholderId,
      card
    };

    // if (!cardHolderData.skipSoap) {
    const client = await soap.createClientAsync(wsdlURL);

    const soapifiedReq = soapifiedRequest(cardHolderData, card);

    console.log(soapifiedReq);

    if (!cardHolderData.cardholderId)
      soapRes = await client.createCardholderAsync(soapifiedReq);
    else soapRes = await client.updateCardholderAsync(soapifiedReq);

    console.log('response');

    console.log(soapRes);

    //if success we get this
    // {
    //   return: {
    //     responseCode: 'FNDS000001',
    //     responseMessage: 'Success',
    //     newCardNumber: '537164****6317',
    //     newCardholderId: '406246'
    //   }
    // }

    response = soapRes[0].return.responseMessage;
    // }
    if (response === 'Success') {
      cardHolder.flexpayResponse = soapRes;
      cardHolder.newCardholderId = soapRes[0]?.return?.newCardholderId || 0;
      cardHolder.newCardNumber = soapRes[0]?.return?.newCardNumber || 0;

      await this.cardRepository.save({ ...card, allocated: 'true' });

      return this.cardHolderRepository.save(cardHolder);
    } else {
      throw new BadRequestException(response);
    }
  }

  async getCardHolder(id: number): Promise<CardHolder> {
    return this.cardHolderRepository.findOne(id);
  }

  // async getAll(): Promise<CardHolder[]> {
  //   return this.cardHolderRepository.find();
  // }

  async getAll(): Promise<CardHolder[]> {
    return this.cardHolderRepository.find({
      select: [
        'id',
        'firstName',
        'lastName',
        'newCardholderId',
        'newCardNumber',
        'card'
      ],
      where: { card: Not(0) } // replace these field names with the ones you need
    });
  }
  // ... other methods
}
