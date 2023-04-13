import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Card } from '../../card/entities/card.entity';
import { Document } from '../../document/entities/document.entity';
import { CustomBaseEntity } from '../../common/entity/custom-base.entity';

@Entity()
export class CardHolder extends CustomBaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  dob: Date;

  @Column()
  passportId: string;

  @Column({ type: 'json' })
  additionalData: any;

  @OneToOne(() => Card, (card) => card.cardHolder)
  @JoinColumn()
  card: Card;

  @OneToMany(() => Document, (document) => document.cardHolder)
  documents: Document[];
}
