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
import { Marquees } from './marque.modal';

@Entity({ name: 'Revenue' })
export class Revenue {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public decorePatnerRavenue: number;

  @Column()
  public decoreOwnerRavenue: number;

  @Column()
  public MarqueeRavenue: number;

  @OneToOne(
    () => Event,
    (Event) => {
      Event.revenue;
    },
  )
  public event: Event;

  @OneToOne(
    () => Marquees,
    (marquees) => {
      marquees.revenue;
    },
  )
  @JoinColumn({ name: 'marquees' })
  public marquee: Marquees;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
