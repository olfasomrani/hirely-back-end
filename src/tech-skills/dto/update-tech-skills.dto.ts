import { IsInt, IsString, IsEnum } from 'class-validator';
import { Level } from '@prisma/client'; 

export class UpdateTechSkillsDto {
  @IsInt()
  profilId: number;

  @IsString()
  libelle: string;

  @IsEnum(Level)
  level: Level;
}
