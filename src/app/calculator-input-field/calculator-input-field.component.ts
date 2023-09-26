import { Component, Input  } from '@angular/core';
import { calculatorService } from '../calculator.service';

interface CalculatorInputs {
  input1: string;
  operation: string;
  input2: string;
}

interface NewValue {
  newValue: string;
  outputId: keyof CalculatorInputs;
}


@Component({
  selector: 'app-calculator-input-field',
  templateUrl: './calculator-input-field.component.html',
  styleUrls: ['./calculator-input-field.component.css']
})
export class CalculatorInputFieldComponent {
  input: string = "";

  constructor(private calculatorService: calculatorService) {


  }

  @Input() childId!: "input1" | "input2";
  // @Output() updateValue: EventEmitter<NewValue> = new EventEmitter<NewValue>(); // Define output event


  inputValue(event: Event): void {
    console.log(this.childId, this.input)
    if (event.target instanceof HTMLInputElement) {
      this.calculatorService.updateInputField(this.childId, event.target.value)
    }
  }

}

