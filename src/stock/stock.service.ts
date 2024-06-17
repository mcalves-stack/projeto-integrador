import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StockService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateStockDto) {
    try {
      let stock = await this.prisma.stock.create({
        data: dto
      });

      return stock;
    } catch (error) {
      throw new Error('Failed to create stock');
    }
  }

  async findAll() {
    try {

      let findAllStock = await this.prisma.stock.findMany({});

      return findAllStock;

    } catch (error) {
      throw new Error('Failed to retrieve stocks');
    }
  }

  async findOne(id: string) {
    try {
      let findByIdStock = await this.prisma.stock.findFirst({
        where: {
          id
        }
      })

      return findByIdStock;
    } catch (error) {
      throw new Error('Failed to retrieve stock');
    }
  }

  async update(id: string, dto: UpdateStockDto) {
    try {
      let updatestock = await this.prisma.stock.updateMany({
        where: {
          id,
        },
        data: {
          ...dto
        }
      })

      return {
        message: 'Stock updated successfully',
      }
    } catch (error) {
      throw new Error(`Failed to update stock with ${id}`);
    }
  }

  async remove(id: string) {
    try {
      let deletestock = await this.prisma.stock.deleteMany({
        where: {
          id
        }
      })

      return {
        message: 'Stock deleted successfully',
      }
    } catch (error) {
      throw new Error(`Failed to delete stock with ${id}`);
    }
  }
}
