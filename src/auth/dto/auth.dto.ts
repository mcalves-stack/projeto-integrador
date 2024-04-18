import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto { 
  @IsString()
  name?: string

  @IsNotEmpty()
  @IsEmail()
  email: string   

  @IsNotEmpty()
  @IsString()
  password: string

  role?: string
}