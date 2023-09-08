import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calculatorInput } from './calculator.input.component';

describe('calculatorInput', () => {
  let component: calculatorInput;
  let fixture: ComponentFixture<calculatorInput>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [calculatorInput]
    });
    fixture = TestBed.createComponent(calculatorInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
