import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorInputFieldComponent } from './calculator-input-field.component';

describe('CalculatorInputFieldComponent', () => {
  let component: CalculatorInputFieldComponent;
  let fixture: ComponentFixture<CalculatorInputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorInputFieldComponent]
    });
    fixture = TestBed.createComponent(CalculatorInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
