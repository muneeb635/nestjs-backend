import { Expose, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
  IsObject,
  IsOptional,
  IsInt,
  ValidateNested,
} from 'class-validator';
import { Revenue } from 'src/models/Revenue.modal';
import { Marquees } from 'src/models/marque.modal';

export class createRevenue {
  @Expose()
  @IsNumber()
  @IsOptional()
  public id: number;

  @IsNotEmpty()
  @IsInt()
  decorePatnerRavenue: number;

  @IsNotEmpty()
  @IsInt()
  decoreOwnerRavenue: number;

  @IsNotEmpty()
  @IsInt()
  MarqueeRavenue: number;

  @IsOptional()
  // @IsInt()
  event: any;

  @IsNotEmpty()
  // @IsInt()
  marquee: any;

  @IsOptional()
  created_at: any;

  @IsOptional()
  updated_at: any;
}

export class oneEventDto {
  @IsNotEmpty()
  @IsInt()
  id: number;
}
export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  sr_no: string;

  @IsNotEmpty()
  @IsString()
  customer_name: string;

  @IsNotEmpty()
  @IsString()
  event_type: string;

  @IsNotEmpty()
  @IsString()
  phone_no: string;

  @IsNotEmpty()
  @IsString()
  date_time: string;

  @IsOptional()
  @IsNumber()
  stage_fee: number;

  @IsOptional()
  @IsNumber()
  dj_fee: number;

  @IsNotEmpty()
  @IsNumber()
  spot_light_fee: number;

  @IsOptional()
  @IsNumber()
  flower_fee: number;

  @IsOptional()
  @IsNumber()
  snow_fee: number;

  @IsOptional()
  @IsNumber()
  cold_fee: number;

  @IsOptional()
  @IsNumber()
  entry_fee: number;

  @IsOptional()
  @IsNumber()
  trust_fee: number;

  @IsOptional()
  @IsNumber()
  dance_fee: number;

  @IsOptional()
  @IsNumber()
  anar_quantity: number;

  @IsOptional()
  @IsNumber()
  chokta_fee: number;

  @IsOptional()
  @IsObject()
  additional_information: object;

  @Expose()
  @ValidateNested()
  @Type(() => createRevenue)
  @IsOptional()
  revenue: createRevenue;

  @IsNotEmpty()
  @IsInt()
  marquee: Marquees;
}
