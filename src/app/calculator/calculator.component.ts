import { Component, inject, OnInit } from '@angular/core';
import { calculatorService } from '../calculator.service';
import { calculatorInputs } from '../calculatorInputs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculatorInputs: calculatorInputs[] = [];
  calculatorService: calculatorService = inject(calculatorService);

  constructor(private http: HttpClient) {
    this.calculatorInputs = this.calculatorService.getAllCalculatorInputs();
  }


  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(): void {
    this.http.get<any[]>('http://localhost:5001/history').subscribe(calculatorInputs => {
      this.calculatorInputs = calculatorInputs;
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


}
