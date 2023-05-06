import { Module } from '@nestjs/common';
import { CalculatorController } from './controller/calculator.controller';
import { CalculatorService } from './service/calculator.service';

@Module({
  controllers: [CalculatorController],
  providers: [CalculatorService]
})
export class CalculatorModule {}
