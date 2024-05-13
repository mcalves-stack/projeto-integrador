import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  lastname: string

  @IsNotEmpty()
  @IsString()
  phone: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  role?: string
}
