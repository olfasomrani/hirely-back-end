import { IsInt, IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Mention } from '@prisma/client';

export class UpdateFormationDto {
  @IsInt()
  profilId: number;

  @IsInt()
  etablissementId: number;

  @IsInt()
  domainId: number;

  @IsString()
  @IsNotEmpty()
  diploma: string;

  @IsString()
  @IsNotEmpty()
  startYear: string;

  @IsString()
  @IsNotEmpty()
  endYear: string;

  @IsEnum(Mention)
  mention: Mention;

  @IsString()
  @IsNotEmpty()
  description: string;
}
