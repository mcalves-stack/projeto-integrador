import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class FamilyService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateFamilyDto) {
    const FamilyWithSamCpf = await this.prisma.family.findUnique({
      where: { cpf: dto.cpf }
    })

    if(FamilyWithSamCpf) {
      throw new ConflictException('There is already a family with the same CPF');
    }
    

    const family = await this.prisma.family.create({
      data: {
        user: dto.user,
        amountPeople: dto.amountPeople,
        phone: dto.phone,
        cpf : dto.cpf,
        familyIncome: dto.familyIncome,
        foodStamps: dto.foodStamps,
      }
    })

    return family;
  }

  async findAll() {
    const families = await this.prisma.family.findFirst();

    return families;
  }

  async findOne(cpf: string) {
    const family = await this.prisma.family.findUnique({
      where: { 
        cpf 
      } 
    });

    return family;
  }

  async update(
    cpf: string, 
    dto: UpdateFamilyDto
  ) {
    const updateFamily = await this.prisma.family.update({
      where: {
        cpf
      },
      data: {
        ...dto
      }
    });

    return updateFamily;
  }

  async remove(id: string) {
    try {
      const family = await this.prisma.family.delete({
        where: { id }
      });
      return "family deleted successfully.";
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') { 
          throw new NotFoundException(`No record found for ID ${id}.`);
        }
      }
      throw error; 
    }
  }
}
