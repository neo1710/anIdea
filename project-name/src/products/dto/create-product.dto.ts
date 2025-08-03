import { IsString, IsNumber, IsOptional, IsDate, ValidateNested, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class SpecialOfferDto {
  @IsString()
  desc: string;

  @IsDate()
  @Type(() => Date)
  validUntil: Date;
}

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsString()
  type: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  off?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => SpecialOfferDto)
  specialOffer?: SpecialOfferDto;
}
