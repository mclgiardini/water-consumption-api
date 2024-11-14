import { Test, TestingModule } from '@nestjs/testing';
import { WaterConsumptionController } from './water-consumption.controller';

describe('WaterConsumptionController', () => {
  let controller: WaterConsumptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaterConsumptionController],
    }).compile();

    controller = module.get<WaterConsumptionController>(WaterConsumptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
