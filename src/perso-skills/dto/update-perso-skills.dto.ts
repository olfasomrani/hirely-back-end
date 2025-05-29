import { IsInt, IsString, IsEnum } from 'class-validator';
import { Level } from '@prisma/client'; 

export class UpdatePersoSkillsDto {
  @IsInt()
  profilId: number;

  @IsString()
  libelle: string;

}
