import { Injectable } from '@angular/core';
import { calculatorInputs } from './calculatorInputs'
import { calculatorHistory } from './calculatorHistory';

interface CalculatorInputs {
  input1: string;
  operation: string;
  input2: string;
}

@Injectable({
  providedIn: 'root'
})

export class calculatorService {

  constructor() { }

  calculatorInputsList: CalculatorInputs = 
    {
      input1: "",
      operation: "",
      input2: "",
    }
  

  calculatorHistoryList: calculatorHistory[] = [
    {
      history: []
    }
  ]

  updateInputField(key: keyof calculatorInputs, newValue: string): void {
    this.calculatorInputsList[key] = newValue;
    console.log(this.calculatorInputsList);
  }

  // getAllCalculatorInputs(): calculatorInputs[] {
  //   return this.calculatorInputsList;
  // }

  submitApplication(input1: number, operation: string, input2: string, result: string) {
    console.log(`Calculation request received: input1: ${input1}, operation: ${operation}, input2: ${input2}. result: ${result}`);
  }
  
}
