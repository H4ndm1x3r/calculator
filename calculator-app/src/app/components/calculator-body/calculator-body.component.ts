import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'calculator-body',
  templateUrl: './calculator-body.component.html',
  styleUrls: ['./calculator-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorBodyComponent {
  @HostBinding('class.calculator-body') private readonly calculatorBodyClass = true;
}
