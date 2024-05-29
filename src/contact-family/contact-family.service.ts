import { Injectable } from '@nestjs/common'
import { CreateContactFamilyDto } from './dto/create-contact-family.dto'
import { UpdateContactFamilyDto } from './dto/update-contact-family.dto'

@Injectable()
export class ContactFamilyService {
  create(dto: CreateContactFamilyDto) {
    return 'This action adds a new contactFamily'
  }

  findAll() {
    return `This action returns all contactFamily`
  }

  findOne(id: number) {
    return `This action returns a #${id} contactFamily`
  }

  update(id: number, dto: UpdateContactFamilyDto) {
    return `This action updates a #${id} contactFamily`
  }

  remove(id: number) {
    return `This action removes a #${id} contactFamily`
  }
}
