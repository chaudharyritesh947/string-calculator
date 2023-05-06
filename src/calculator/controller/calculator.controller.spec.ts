import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from '../service/calculator.service';
import { CalculatorController } from './calculator.controller';

describe('CalculatorController', () => {
  let controller: CalculatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorController],
      providers:[CalculatorService]
    }).compile();

    controller = module.get<CalculatorController>(CalculatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
