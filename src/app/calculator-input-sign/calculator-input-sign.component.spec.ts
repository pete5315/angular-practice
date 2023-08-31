import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorInputSignComponent } from './calculator-input-sign.component';

describe('CalculatorInputSignComponent', () => {
  let component: CalculatorInputSignComponent;
  let fixture: ComponentFixture<CalculatorInputSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorInputSignComponent]
    });
    fixture = TestBed.createComponent(CalculatorInputSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
