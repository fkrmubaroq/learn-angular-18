import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'button-back',
  standalone: true,
  templateUrl: './button-back.component.html',
  imports: [LucideAngularModule],
})
export class ButtonBackComponent {
  get isShowButtonBack() {
    console.log("huhu")
    return window.location.pathname !== '/';
  }
  onClick() {
    window.history.back();
  }
}
