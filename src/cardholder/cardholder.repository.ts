import { EntityRepository, Repository } from 'typeorm';
import { CardHolder } from './entities/cardholder.entity';

@EntityRepository(CardHolder)
export class CardHolderRepository extends Repository<CardHolder> {
  async getCardholders(): Promise<CardHolder[]> {
    return this.createQueryBuilder('cardholder').getMany();
  }
}
