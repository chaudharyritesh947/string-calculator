import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from '../service/calculator.service';

@Controller('calculator')
export class CalculatorController {

    constructor(
        private readonly calculatorService: CalculatorService
      ) {}

    @Post('/string')
    async authenticate(@Body() input: any): Promise<any> {
      try {
      
       const processedOutput =  this.calculatorService.add(input);
      
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
