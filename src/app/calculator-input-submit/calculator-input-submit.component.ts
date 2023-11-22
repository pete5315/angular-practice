import { Component } from '@angular/core';
import { calculatorService } from '../calculator.service';


@Component({
  selector: 'app-calculator-input-submit',
  templateUrl: './calculator-input-submit.component.html',
  styleUrls: ['./calculator-input-submit.component.css']
})
export class CalculatorInputSubmitComponent {

  constructor(private calculatorService: calculatorService) { }
  submit(): void {
    console.log("hiiii")

      this.calculatorService.submitApplication(this.calculatorService.calculatorInputsList.input1, this.calculatorService.calculatorInputsList.operation, this.calculatorService.calculatorInputsList.input2)
  }

}
