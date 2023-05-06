import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from '../service/calculator.service';

@Controller('calculator')
export class CalculatorController {

    constructor(
        private readonly calculatorService: CalculatorService
      ) {}

    @Post('/string')
    async addString(@Body() input: any): Promise<any> {
      try {
      
       const inputString = input?.numbers;
       const processedOutput =  this.calculatorService.add(inputString);
      
        const responseDto: any = {
          status: 'success',
          data: processedOutput,
          message: '',
        };
        return responseDto;
      } catch (error) {
        const responseDto: any = {
          status: 'error',
          message: error.message,
        };
        return responseDto;
      }
    }

}
