import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  description?: string;
}
