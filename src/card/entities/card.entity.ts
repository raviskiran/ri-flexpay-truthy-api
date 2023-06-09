import { Entity, Column, OneToOne, Index } from 'typeorm';
import { CardHolder } from '../../cardholder/entities/cardholder.entity';
import { CustomBaseEntity } from '../../common/entity/custom-base.entity';

@Entity()
export class Card extends CustomBaseEntity {
  @Index({
    unique: true
  })
  @Column()
  cardNumber: string;

  @Column()
  sequenceNumber: string;

  @Column()
  trackingNumber: string;

  @Column()
  customerId: string;

  @Column()
  statusId: string;

  @Column()
  allocated: string;

  @Column()
  plastic: string;

  @OneToOne(() => CardHolder, (cardHolder) => cardHolder.card)
  cardHolder: CardHolder;
}
