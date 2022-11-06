import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorDisplayComponent {
  @HostBinding('class.calculator-display') private readonly calculatorDisplayClass = true;
}
