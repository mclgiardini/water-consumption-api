import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { WaterConsumptionService } from './water-consumption.service';

@Controller('water-consumption')
export class WaterConsumptionController {
  constructor(private readonly waterConsumptionService: WaterConsumptionService) {}

  @Post()
  async registerConsumption(
    @Body('userId') userId: number,
    @Body('consumption') consumption: number,
    @Body('date') date: Date,
  ) {
    return this.waterConsumptionService.registerConsumption(userId, consumption, date);
  }

  @Get('history')
  async getConsumptionHistory(
    @Query('userId') userId: number,
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    return this.waterConsumptionService.getConsumptionHistory(userId, startDate, endDate);
  }

  @Get('alerts')
  async getAlerts(@Query('userId') userId: number) {
    return this.waterConsumptionService.getAlerts(userId);
  }
}
