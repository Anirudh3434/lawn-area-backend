import { Controller, Post, Body, Get, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AreaService } from '../services/area.service';
import { CalculateAreaDto } from '../dto/calculate-area.dto';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post('calculate')
  @HttpCode(HttpStatus.CREATED)
  async calculate(@Body() dto: CalculateAreaDto) {
    return this.areaService.calculateArea(dto);
  }

  @Get('history')
  @HttpCode(HttpStatus.OK)
  async history() {
    return this.areaService.getHistory();
  }

  @Get('history/:id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id') id: string) {
    return this.areaService.getById(id);
  }

  @Delete('history/:id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id') id: string) {
    await this.areaService.deleteById(id);
    return { success: true };
  }
}
