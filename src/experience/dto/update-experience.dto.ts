import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class UpdateExperienceDto {
  @IsInt()
  profilId: number;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  place: string;

  @IsString()
  @IsNotEmpty()
  startYear: string;

  @IsString()
  @IsNotEmpty()
  endYear: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
