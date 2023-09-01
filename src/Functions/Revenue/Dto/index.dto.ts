import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
  IsObject,
  IsOptional,
  IsInt,
} from 'class-validator';

export class CreateRevenueDto {
  @IsNotEmpty()
  @IsInt()
  decorePatnerRavenue: number;

  @IsNotEmpty()
  @IsInt()
  decoreOwnerRavenue: number;

  @IsNotEmpty()
  @IsInt()
  MarqueeRavenue: number;
}
