import { Injectable } from '@nestjs/common';
import { Delimeter } from '../../utils/delimeter';
import { ICalculateService } from '../adaptor/service/ICalculateService';

@Injectable()
export class CalculatorService implements ICalculateService {
    public add(numbers: string): number {
      try{
        if (numbers === '') {
            return 0;
          }
      
          if(!this.validateInput(numbers)){
              throw new Error(`Invalid Input`);
          }
  
          const delimiter = this.getDelimiter(numbers);
          const processedNumbers = this.getProcessedNumbers(numbers, delimiter);
          const parsed = processedNumbers.split(delimiter).map(Number);
          this.validateNegatives(parsed);
      
          const sum = parsed.reduce((digit, cur) => digit + cur, 0);
          return sum;  
      }
      catch(error){
        throw new Error(error);
      }
    }

    private validateInput(numbers: string) {
        try{
            if(numbers && numbers.includes(',\n')) {
                return false;
              }
            return true;
        }
        catch(error){
            throw new Error(error);
          }
    }
    
    private getProcessedNumbers(nums: string, delimiter: string){
        try{
            const numbers = nums.replace(/\/\/.\n/, '');
            return numbers.replace(/\n/g, delimiter);
        
        }
        catch(error){
            throw new Error(error);
          }
    }

      private validateNegatives(numbers: number[]): void {
        try{
            const negatives = numbers.filter((n) => n < 0);
            if (negatives.length > 0) {
              throw new Error(`negatives not allowed: ${negatives.join(',')}`);
            }
        }
        catch(error){
            throw new Error(error);
          }
      }

      private getDelimiter(numbers: string): string {
        try{
            if (numbers.startsWith('//')) {
                return numbers.charAt(2);
              }
              return ',';
        }
        catch(error){
          throw new Error(error);
        }
      }
}
