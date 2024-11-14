import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterConsumptionService } from './water-consumption.service';
import { WaterConsumptionController } from './water-consumption.controller';
import { WaterConsumption } from './water-consumption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WaterConsumption])],
  providers: [WaterConsumptionService],
  controllers: [WaterConsumptionController],
})
export class WaterConsumptionModule {}
