import { EntityRepository, Repository } from 'typeorm';
import { Card } from './entities/card.entity';

@EntityRepository(Card)
export class CardRepository extends Repository<Card> {
  async getUnallocatedCards(): Promise<Card[]> {
    return this.createQueryBuilder('card')
      .where('card.allocated = :allocated', { allocated: 'false' }) // assuming allocated is a string 'true' or 'false'
      .getMany();
  }
}
