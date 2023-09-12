import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } 
    from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorTitleComponent } from './calculator-title/calculator-title.component';
import { CalculatorInputSignComponent } from './calculator-input-sign/calculator-input-sign.component';
import { CalculatorInputSubmitComponent } from './calculator-input-submit/calculator-input-submit.component';
import { CalculatorInputClearComponent } from './calculator-input-clear/calculator-input-clear.component';
import { CalculatorHistoryComponent } from './calculator-history/calculator-history.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { CalculatorInputFieldComponent } from './calculator-input-field/calculator-input-field.component';
import { CalculatorNumbersComponent } from './calculator-numbers/calculator-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorTitleComponent,
    CalculatorInputSignComponent,
    CalculatorInputSubmitComponent,
    CalculatorInputClearComponent,
    CalculatorHistoryComponent,
    TestComponentComponent,
    CalculatorInputFieldComponent,
    CalculatorNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// imports: [

// ],