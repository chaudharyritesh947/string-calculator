import { Injectable } from '@nestjs/common';
import { Delimeter } from '../../utils/delimeter';
import { ICalculateService } from '../adaptor/service/ICalculateService';

@Injectable()
export class CalculatorService implements ICalculateService {
    public add(numbers: string): number {
        if (numbers === '') {
          return 0;
        }
    
        const delimiter = this.getDelimiter(numbers);
        const processedNumbers = this.getProcessedNumbers(numbers, delimiter);
        const parsed = processedNumbers.split(delimiter).map(Number);
        this.validateNegatives(parsed);
    
        const sum = parsed.reduce((digit, cur) => digit + cur, 0);
        return sum;  
    }
    
    private getProcessedNumbers(nums: string, delimiter: string){
        const numbers = nums.replace(/\/\/.\n/, '');
        return numbers.replace(/\n/g, delimiter);
    }

      private validateNegatives(numbers: number[]): void {
        const negatives = numbers.filter((n) => n < 0);
        if (negatives.length > 0) {
          throw new Error(`negatives not allowed: ${negatives.join(',')}`);
        }
      }

      private getDelimiter(numbers: string): string {
        if (numbers.startsWith('//')) {
          return numbers.charAt(2);
        }
        return ',';
      }
}
