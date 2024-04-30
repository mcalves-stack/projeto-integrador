import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseGuards } from '@nestjs/common';
import { FamilyService } from './family.service';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { DtoValidationPipe } from 'src/pipes/validate-pipe';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('family')
export class FamilyController {
  constructor(private familyService: FamilyService) {}

  @Post()
  create(@Body() dto: CreateFamilyDto) {
    return this.familyService.create(dto);
  }

  @Get()
  findAll() {
    return this.familyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familyService.findOne(id);
  }
  
  @Patch(':id')
  update(@Param('id') cpf: string, @Body() dto: UpdateFamilyDto) {
    return this.familyService.update(cpf, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.familyService.remove(id);
  }
}
