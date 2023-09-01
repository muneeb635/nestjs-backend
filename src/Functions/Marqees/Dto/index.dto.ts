import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
  IsObject,
  IsOptional,
  IsInt,
} from 'class-validator';

export class CreateMarqueDto {
  @IsNotEmpty()
  @IsString()
  MarqueeName: string;

  @IsNotEmpty()
  @IsInt()
  Persantage: number;

  @IsNotEmpty()
  @IsString()
  AnarFixedBy: string;

  @IsNotEmpty()
  @IsInt()
  AnarFixedPrice: number;
}
