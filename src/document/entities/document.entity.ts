import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';
import { CardHolder } from '../../cardholder/entities/cardholder.entity';
import { CustomBaseEntity } from '../../common/entity/custom-base.entity';

@Entity()
export class Document extends CustomBaseEntity {
  @Column()
  documentType: string;

  @Column()
  documentUrl: string;

  @ManyToOne(() => CardHolder, (cardHolder) => cardHolder.documents)
  cardHolder: CardHolder;
}
