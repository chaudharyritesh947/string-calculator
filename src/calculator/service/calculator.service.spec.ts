import { Test, TestingModule } from '@nestjs/testing';
import { ICalculateService } from '../adaptor/service/ICalculateService';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });
 
  describe('add', () => {

    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should return 0 for an empty string', () => {
      expect(service.add('')).toBe(0);
    });

    it('should return the number for a single number', () => {
      expect(service.add('1')).toBe(1);
    });

    it('should return the sum for two numbers', () => {
      expect(service.add('1,2')).toBe(3);
    });
   
  });
});
