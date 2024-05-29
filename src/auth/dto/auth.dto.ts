import { IsEmail, IsNotEmpty, IsString } from 'class-validator'


//validação de dados e entrada DTO
export class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  role?: string
}
