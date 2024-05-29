import { Module } from '@nestjs/common'
import { ContactFamilyService } from './contact-family.service'
import { ContactFamilyController } from './contact-family.controller'

@Module({
  controllers: [ContactFamilyController],
  providers: [ContactFamilyService],
})
export class ContactFamilyModule {}
