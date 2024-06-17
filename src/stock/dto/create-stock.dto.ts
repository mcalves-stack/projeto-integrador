import { IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class CreateStockDto {
  @IsString()
  @IsNotEmpty()
  name: string   

  @IsString()
  @IsNotEmpty()
  type: string

  @IsNumber()
  @IsNotEmpty()
  quantity: number

  @IsString()
  @IsNotEmpty()
  size: string

  @IsNumber()
  @IsNotEmpty()
  availability: number
}
    