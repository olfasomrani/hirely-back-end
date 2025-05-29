import { IsString, IsInt, IsOptional, IsDateString } from 'class-validator';

export class UpdateInformationDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsString()
  adress: string;

  @IsString()
  city: string;

  @IsInt()
  postalCode: number;

  @IsInt()
  profilId: number 
}
