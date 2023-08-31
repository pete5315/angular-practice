import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorInputClearComponent } from './calculator-input-clear.component';

describe('CalculatorInputClearComponent', () => {
  let component: CalculatorInputClearComponent;
  let fixture: ComponentFixture<CalculatorInputClearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorInputClearComponent]
    });
    fixture = TestBed.createComponent(CalculatorInputClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
