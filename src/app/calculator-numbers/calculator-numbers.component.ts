import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-numbers',
  templateUrl: './calculator-numbers.component.html',
  styleUrls: ['./calculator-numbers.component.css'],
})
export class CalculatorNumbersComponent {
  list = [7,8,9,'/',4,5,6,'*',1,2,3,'-','C',0,'=','+'];

}
