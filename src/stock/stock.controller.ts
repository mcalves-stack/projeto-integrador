import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private  readonly stockService: StockService) {}

  @Post()
  create(@Body() dto: CreateStockDto) {
    return this.stockService.create(dto);
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStockDto) {
    return this.stockService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(id);
  }
}
