import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorNumbersComponent } from './calculator-numbers.component';

describe('CalculatorNumbersComponent', () => {
  let component: CalculatorNumbersComponent;
  let fixture: ComponentFixture<CalculatorNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorNumbersComponent]
    });
    fixture = TestBed.createComponent(CalculatorNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
