import { IsOptional, IsString } from 'class-validator';

export class UpdateRecruteurDto {
  @IsOptional()
  @IsString()
  companyName?: string;

  @IsOptional()
  @IsString()
  position?: string;
}
