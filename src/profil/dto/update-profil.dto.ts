import {
  IsOptional,
  ValidateNested,
  IsInt
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateExperienceDto } from '../../experience/dto/create-experience.dto';
import { CreateFormationDto } from '../../formation/dto/create-formation.dto';
import { CreateTechSkillsDto } from '../../tech-skills/dto/create-tech-skills.dto';
import { CreateLangSkillsDto } from '../../lang-skills/dto/create-lang-skills.dto';
import { CreatePersoSkillsDto } from '../../perso-skills/dto/create-perso-skills.dto';
import { CreateDocumentsDto } from '../../document/dto/create-document.dto';
import { CreateInformationDto } from '../../personal_info/dto/create-personal-info.dto';

export class UpdateProfilDto {
  @IsInt()
  candidateId: number;

  @ValidateNested()
  @Type(() => CreateInformationDto)
  @IsOptional()
  information?: CreateInformationDto;

  @ValidateNested()
  @Type(() => CreateDocumentsDto)
  @IsOptional()
  documents?: CreateDocumentsDto;

  @ValidateNested({ each: true })
  @Type(() => CreateFormationDto)
  @IsOptional()
  formations?: CreateFormationDto[];

  @ValidateNested({ each: true })
  @Type(() => CreateExperienceDto)
  @IsOptional()
  experiences?: CreateExperienceDto[];

  @ValidateNested({ each: true })
  @Type(() => CreateTechSkillsDto)
  @IsOptional()
  techSkills?: CreateTechSkillsDto[];

  @ValidateNested({ each: true })
  @Type(() => CreateLangSkillsDto)
  @IsOptional()
  lingSkills?: CreateLangSkillsDto[];

  @ValidateNested({ each: true })
  @Type(() => CreatePersoSkillsDto)
  @IsOptional()
  persoSkills?: CreatePersoSkillsDto[];
}

