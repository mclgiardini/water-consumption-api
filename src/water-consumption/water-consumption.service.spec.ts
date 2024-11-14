import { Test, TestingModule } from '@nestjs/testing';
import { WaterConsumptionService } from './water-consumption.service';

describe('WaterConsumptionService', () => {
  let service: WaterConsumptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaterConsumptionService],
    }).compile();

    service = module.get<WaterConsumptionService>(WaterConsumptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
