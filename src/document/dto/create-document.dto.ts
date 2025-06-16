import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateDocumentsDto {
  @IsString()
  @IsNotEmpty()
  cv: string;

  @IsString()
  @IsNotEmpty()
  cover_letter: string;

  @IsString()
  @IsNotEmpty()
  diploma: string;

  @IsString()
  @IsNotEmpty()
  cin: string;

  @IsInt()
  profilId: number;
}
