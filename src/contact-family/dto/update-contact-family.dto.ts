import { PartialType } from '@nestjs/swagger'
import { CreateContactFamilyDto } from './create-contact-family.dto'

export class UpdateContactFamilyDto extends PartialType(
  CreateContactFamilyDto,
) {}
