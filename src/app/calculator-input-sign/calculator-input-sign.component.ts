import { Component } from '@angular/core';
import { calculatorInputs } from '../calculatorInputs';
import { calculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator-input-sign',
  templateUrl: './calculator-input-sign.component.html',
  styleUrls: ['./calculator-input-sign.component.css']
})
export class CalculatorInputSignComponent {

  constructor(private calculatorService: calculatorService) {}

  saveInputSign(key: keyof calculatorInputs, value: string) {
    this.calculatorService.updateInputField(key, value)
  }
}
