import { IsInt, IsString, IsEnum } from 'class-validator';

export class CreatePersoSkillsDto {
  @IsInt()
  profilId: number;

  @IsString()
  libelle: string;
}
