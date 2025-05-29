import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '@prisma/client'; 

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEnum(Role)
  role: Role; 
}
