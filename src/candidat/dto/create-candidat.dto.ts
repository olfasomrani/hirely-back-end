import { IsOptional, IsString, IsInt } from 'class-validator';

export class CreateCandidateDto {
  @IsInt()
  userId: number; 

  @IsOptional()
  @IsString()
  experience?: string;

  @IsOptional()
  @IsString()
  resumeUrl?: string;

}
