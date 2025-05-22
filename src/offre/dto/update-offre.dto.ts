import { IsString, IsOptional, IsNumber, IsInt } from 'class-validator';

export class UpdateOffreDto {
  @IsInt()
  recruiterId: number;
  
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  salary: number;
}
