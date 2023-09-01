import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Event } from './event.modal';
import { Revenue } from './Revenue.modal';

@Entity({ name: 'Marquees' })
export class Marquees {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public MarqueeName: string;

  @Column()
  public Persantage: number;

  @Column()
  public AnarFixedBy: string;

  @Column()
  public AnarFixedPrice: number;

  @Column()
  public DjOwner: string;

  @OneToOne(
    () => Revenue,
    (revenue) => {
      revenue.marquee;
    },
  )
  public revenue: Revenue;

  @OneToMany(() => Event, (Event) => Event.marquee)
  public event: Event[];
}
