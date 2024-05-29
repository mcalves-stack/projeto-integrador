import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ContactFamilyService } from './contact-family.service'
import { CreateContactFamilyDto } from './dto/create-contact-family.dto'
import { UpdateContactFamilyDto } from './dto/update-contact-family.dto'

@Controller('contactfamily')
export class ContactFamilyController {
  constructor(private contactFamilyService: ContactFamilyService) {}

  @Post()
  create(@Body() dto: CreateContactFamilyDto) {
    return this.contactFamilyService.create(dto)
  }

  @Get()
  findAll() {
    return this.contactFamilyService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactFamilyService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateContactFamilyDto) {
    return this.contactFamilyService.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactFamilyService.remove(+id)
  }
}
