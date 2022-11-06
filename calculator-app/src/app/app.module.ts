import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorBodyComponent, CalculatorButtonComponent, CalculatorComponent, CalculatorDisplayComponent, } from './components';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorDisplayComponent,
    CalculatorBodyComponent,
    CalculatorButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
