import { Injectable } from '@angular/core';
import {calculatorInputs} from './calculatorInputs'

@Injectable({
  providedIn: 'root'
})
export class calculatorService {

  constructor() { }

  calculatorInputsList: calculatorInputs[] = [
    {
      input1: 0,
      operation: "+",
      input2: 0,
    }
  ]
  getAllCalculatorInputs(): calculatorInputs[] {
    return this.calculatorInputsList;
  }

  submitApplication(input1: number, operation: string, input2: string) {
    console.log(`Calculation request received: input1: ${input1}, operation: ${operation}, input2: ${input2}.`);
  }
  
}
