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

  @Column({ nullable: true })
  public sr_no: string;

  @Column({ nullable: false })
  public customer_name: string;

  @Column({ nullable: false })
  public event_type: string;

  @Column({ nullable: false })
  public phone_no: string;

  @Column({ nullable: false })
  public date_time: string;

  @Column({ nullable: true })
  public stage_fee: number;

  @Column({ nullable: true })
  public dj_fee: number;

  @Column({ nullable: true })
  public spot_light_fee: number;

  @Column({ nullable: true })
  public flower_fee: number;

  @Column({ nullable: true })
  public snow_fee: number;

  @Column({ nullable: true })
  public cold_fee: number;

  @Column({ nullable: true })
  public entry_fee: number;

  @Column({ nullable: true })
  public trust_fee: number;

  @Column({ nullable: true })
  public dance_fee: number;

  @Column({ nullable: true })
  public anar_quantity: number;

  //   @Column()
  //   public trust_gali: number;

  @Column({ nullable: true })
  public chokta_fee: number;

  @Column({ type: 'jsonb', nullable: true })
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
  @JoinColumn({ name: 'event' })

  public revenue: Revenue;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
