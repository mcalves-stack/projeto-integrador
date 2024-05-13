import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  MaxLength,
} from 'class-validator'

export class UpdateFamilyDto {
  @IsNotEmpty()
  @IsString()
  user: string

  @IsNotEmpty()
  @IsNumber()
  amountPeople: number

  @IsNotEmpty()
  @IsString()
  @MaxLength(11)
  cpf: string

  @IsNotEmpty()
  @IsString()
  @Length(0, 11)
  phone: string

  @IsNotEmpty()
  @IsNumber()
  familyIncome: number

  @IsNotEmpty()
  @IsNumber()
  foodStamps: number
}
