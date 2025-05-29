import { IsOptional, IsString } from 'class-validator';

export class UpdateCandidateDto {
  @IsOptional()
  @IsString()
  resumeUrl?: string;

  @IsOptional()
  @IsString()
  experience?: string;
}
