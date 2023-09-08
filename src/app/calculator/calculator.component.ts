import { Component, inject } from '@angular/core';
import { calculatorService } from '../calculator.service';
import { calculatorInputs } from '../calculatorInputs';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calculatorInputs: calculatorInputs[] = [];
  calculatorService: calculatorService = inject(calculatorService);

  constructor() {
    this.calculatorInputs = this.calculatorService.getAllCalculatorInputs();
  }
}
