import { Component, OnInit, ChangeDetectionStrategy, HostBinding, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'calculator-body',
  templateUrl: './calculator-body.component.html',
  styleUrls: ['./calculator-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorBodyComponent implements OnInit, OnDestroy {
  @HostBinding('class.calculator-body') private readonly calculatorBodyClass = true;

  private keyUpListener: (() => void) | undefined;

  constructor(private readonly renderer: Renderer2) {

  }

  public ngOnInit(): void {
    this.keyUpListener = this.renderer.listen(window, 'keyup', (e) => {
      console.log(e);
      
    });
  }

  public ngOnDestroy(): void {
    if (this.keyUpListener) {
      this.keyUpListener();
    }
  }
}
