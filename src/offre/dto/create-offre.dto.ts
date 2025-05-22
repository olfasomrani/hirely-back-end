import { Decimal } from '@prisma/client/runtime/library';
import { IsDecimal, IsInt, IsString, IsOptional } from 'class-validator';

export class CreateOffreDto {
  @IsInt()
  recruiterId: number;
  @IsString()
  title: string;
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  image: string;
  @IsString()
  location: string;
  @IsInt()
  salary: number;
}
