import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorInputSubmitComponent } from './calculator-input-submit.component';

describe('CalculatorInputSubmitComponent', () => {
  let component: CalculatorInputSubmitComponent;
  let fixture: ComponentFixture<CalculatorInputSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorInputSubmitComponent]
    });
    fixture = TestBed.createComponent(CalculatorInputSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
