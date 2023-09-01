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
  ManyToOne,
} from 'typeorm';
import { Marquees } from './marque.modal';
import { Revenue } from './Revenue.modal';

@Entity({ name: 'Event' })
export class Event {
  @PrimaryGeneratedColumn()
  public id: number;

  //   @Column()
  //   public name: string;

  @Column()
  public sr_no: string;

  @Column()
  public customer_name: string;

  @Column()
  public event_type: string;

  @Column()
  public phone_no: string;

  @Column()
  public date_time: string;

  @Column()
  public stage_fee: number;

  @Column()
  public dj_fee: number;

  @Column()
  public spot_light_fee: number;

  @Column()
  public flower_fee: number;

  @Column()
  public snow_fee: number;

  @Column()
  public cold_fee: number;

  @Column()
  public entry_fee: number;

  @Column()
  public trust_fee: number;

  @Column()
  public dance_fee: number;

  @Column()
  public anar_quantity: number;

  //   @Column()
  //   public trust_gali: number;

  @Column()
  public chokta_fee: number;

  @Column({ type: 'jsonb' })
  public additional_information: object;

  @ManyToOne(() => Marquees)
  @JoinColumn({ name: 'marquee' })
  public marquee: Marquees;

  @OneToOne(
    () => Revenue,
    (revenue) => {
      revenue.event;
    },
  )
  public revenue: Revenue;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
