import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';

const specialKeyEvent: Record<string, string> = {
  '=': 'shift.=',
  'Clear': 'Escape',
  'Delete': 'Backspace',
}

@Component({
  selector: '<calculator-button>',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorButtonComponent implements OnInit, OnDestroy {
  @Input() public key: string = '';

  @Output() public keyEvent = new EventEmitter<string>();

  @ViewChild('calculatorButton') public buttonElement: HTMLButtonElement | undefined;

  @HostBinding('class.calculator-button') public calculatorButtonClass = true;

  public active = false;

  private keyUpListener: (() => void) | undefined;
  private keyDownListener: (() => void) | undefined;

  constructor(
    private readonly renderer: Renderer2,
    private readonly cd: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    const eventKey = specialKeyEvent[this.key] ? specialKeyEvent[this.key] : this.key;

    this.keyUpListener = this.renderer.listen(window, `keyup.${eventKey}`, () => {
      console.log(this.key);
      
      this.active = false;
      this.cd.detectChanges();
      this.clicked();
    })

    this.keyDownListener = this.renderer.listen(window, `keydown.${eventKey}`, () => {
      this.active = true;
      this.cd.detectChanges();
    })
  }

  public ngOnDestroy(): void {
    if (this.keyUpListener) {
      this.keyUpListener();
    }
    
    if (this.keyDownListener) {
      this.keyDownListener();
    }
  }

  public clicked(): void {
    this.keyEvent.emit(this.key);
  }
}
