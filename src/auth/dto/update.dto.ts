import { PartialType } from '@nestjs/mapped-types'
import { CreateDto } from './create.dto'

export class UpdateAuthDto extends PartialType(CreateDto) {}
