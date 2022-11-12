import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = 'calculator-app';
  public displayText = '';

  public buttonClick(key: string): void {
    if (key === "Delete") {
      this.displayText = this.displayText.slice(0, -1)

      return;
    }

    if (key === "Clear") {
      this.displayText = '';

      return;
    }

    if (key === "=") {
      this.displayText = (eval(this.displayText) as number).toString();

      return;
    }

    this.displayText += key;
  }
}
