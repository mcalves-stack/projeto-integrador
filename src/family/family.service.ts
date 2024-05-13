import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { CreateFamilyDto } from './dto/create-family.dto'
import { UpdateFamilyDto } from './dto/update-family.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class FamilyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateFamilyDto) {
    try {
      const existingFamily = await this.prisma.family.findUnique({
        where: { cpf: dto.cpf },
      })

      if (existingFamily) {
        throw new ConflictException(
          `There is already a family with CPF: ${dto.cpf}`,
        )
      }

      return await this.prisma.family.create({
        data: {
          user: dto.user,
          amountPeople: dto.amountPeople,
          phone: dto.phone,
          cpf: dto.cpf,
          familyIncome: dto.familyIncome,
          foodStamps: dto.foodStamps,
        },
      })
    } catch (error) {
      // Log error or handle specific database-related errors if needed
      throw new NotFoundException('Failed to create family record.', error)
    }
  }

  async findAll() {
    try {
      return await this.prisma.family.findMany()
    } catch (error) {
      throw new NotFoundException('Failed to retrieve families.', error)
    }
  }

  async findOne(cpf: string) {
    try {
      const family = await this.prisma.family.findUnique({
        where: { cpf },
      })

      if (!family) {
        throw new NotFoundException(`Family with CPF ${cpf} not found.`)
      }

      return family
    } catch (error) {
      throw new NotFoundException(
        `Failed to retrieve family with CPF ${cpf}.`,
        error,
      )
    }
  }

  async update(cpf: string, dto: UpdateFamilyDto) {
    try {
      return await this.prisma.family.update({
        where: { cpf },
        data: dto,
      })
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(
          `No family found with CPF ${cpf} to update.`,
        )
      }
      throw new NotFoundException('Failed to update family.', error)
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.family.delete({
        where: { id },
      })
      return 'Family deleted successfully.'
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`No record found for ID ${id}.`)
      }
      throw new NotFoundException('Failed to delete family.', error)
    }
  }
}
