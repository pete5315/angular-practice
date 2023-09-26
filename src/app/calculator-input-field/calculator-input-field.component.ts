import { Component, Input  } from '@angular/core';
import { calculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator-input-field',
  templateUrl: './calculator-input-field.component.html',
  styleUrls: ['./calculator-input-field.component.css']
})
export class CalculatorInputFieldComponent {
  input: string = "";

  constructor(private calculatorService: calculatorService) {}

  @Input() childId!: "input1" | "input2";


  inputValue(event: Event): void {
    console.log(this.childId, this.input)
    if (event.target instanceof HTMLInputElement) {
      this.calculatorService.updateInputField(this.childId, event.target.value)
    }
  }

}

