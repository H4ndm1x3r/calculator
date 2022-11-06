import { ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'button[calculator-button]',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorButtonComponent {
  @Input() public key: string = '';

  @HostBinding('class.calculator-button') private readonly calculatorButtonClass = true;
}
