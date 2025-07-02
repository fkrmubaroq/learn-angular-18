import { Component } from '@angular/core';

@Component({
  selector: 'button-back',
  standalone: true,
  templateUrl: './button-back.component.html',
})
export class ButtonBackComponent {
  onClick() {
    window.history.back();
  }
}
