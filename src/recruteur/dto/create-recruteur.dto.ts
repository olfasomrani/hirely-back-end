import { IsOptional, IsString, IsInt } from 'class-validator';

export class CreateRecruteurDto {
  @IsInt()
  userId: number; 

  @IsOptional()
  @IsString()
  companyName?: string;

  @IsOptional()
  @IsString()
  position?: string;
}
