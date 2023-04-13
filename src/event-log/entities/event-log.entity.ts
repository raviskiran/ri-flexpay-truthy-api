import { Entity, Column, ManyToMany } from 'typeorm';
import { UserEntity } from '../../auth/entity/user.entity';
import { CustomBaseEntity } from '../../common/entity/custom-base.entity';

@Entity()
export class EventLog extends CustomBaseEntity {
  @Column()
  action: string;

  @Column({ type: 'json', nullable: true })
  data: any;

  @ManyToMany((type) => UserEntity, (user) => user.email)
  role: UserEntity[];
}
