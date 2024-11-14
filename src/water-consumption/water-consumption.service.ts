import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { WaterConsumption } from './water-consumption.entity';

@Injectable()
export class WaterConsumptionService {
  constructor(
    @InjectRepository(WaterConsumption)
    private waterConsumptionRepository: Repository<WaterConsumption>,
  ) {}

  async registerConsumption(userId: number, consumption: number, date: Date) {
    const record = this.waterConsumptionRepository.create({ userId, consumption, date });
    return this.waterConsumptionRepository.save(record);
  }

  async getConsumptionHistory(userId: number, startDate: Date, endDate: Date) {
    return this.waterConsumptionRepository.find({
      where: { userId, date: Between(startDate, endDate) },
      order: { date: 'ASC' },
    });
  }

  async getAlerts(userId: number) {
    const [latest, previous] = await this.waterConsumptionRepository.find({
      where: { userId },
      order: { date: 'DESC' },
      take: 2,
    });

    if (!latest || !previous) return null;

    return latest.consumption > previous.consumption
      ? { message: 'Consumo elevado em relação ao mês passado!' }
      : { message: 'Consumo estável ou reduzido' };
  }
}
