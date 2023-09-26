import { Component, inject, OnInit } from '@angular/core';
import { calculatorService } from '../calculator.service';
import { calculatorInputs } from '../calculatorInputs';
import { calculatorHistory } from '../calculatorHistory';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  calculatorInputs: CalculatorInputs = {input1: "", input2: "", operation: ""}
  calculatorHistory: calculatorHistory[] = [];
  calculatorService: calculatorService = inject(calculatorService);
  childId: string = "";

  constructor(private http: HttpClient) {
    // this.calculatorInputs = this.calculatorService.getAllCalculatorInputs();
  }


  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(): void {
    this.http.get<any[]>('http://localhost:5001/api/calculator/history').subscribe(calculatorHistory => {
      this.calculatorHistory = calculatorHistory;
    });
  }

  addCalculation(): void {
    if (this.calculatorInputs) {
      this.http.post('http://localhost:5001/history', this.calculatorInputs).subscribe(() => {
        // this.calculatorInputs.reset(); //need to add reset field functionality
        this.getHistory();
      });
    }
  }

  updateCalculation(calculation: any): void {
    this.http.put(`http://localhost:5001/history/}`, calculation).subscribe(() => {
      // this.http.put(`http://localhost:5001/history/${calculation}`, this.calculatorInputs).subscribe(() => {
        this.getHistory();
    });
  }

  deleteCalculation(calculation: number): void {
    this.http.delete(`http://localhost:5001/history/`).subscribe(() => {
      // this.http.delete(`http://localhost:5001/history/${calculation}`).subscribe(() => {
        this.getHistory();
    });
  }

  updateCalculatorInputs(newValue: NewValue) {
    // Use this.childId to determine which input property to update
    if (newValue.outputId === "input1") {
      this.calculatorInputs.input1 = newValue.newValue;
    } else if (newValue.outputId === "input2") {
      this.calculatorInputs[newValue.outputId] = newValue.newValue;
    }
  }



}
