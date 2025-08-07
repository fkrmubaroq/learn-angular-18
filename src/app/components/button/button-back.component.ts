import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'button-back',
  standalone: true,
  templateUrl: './button-back.component.html',
  imports: [LucideAngularModule],
})
export class ButtonBackComponent {
  private router = inject(Router)
  get isShowButtonBack() {
    return window.location.pathname !== '/' && !window.location.pathname.includes('/auth/admin');
  }
  onClick() {
    this.router.navigateByUrl("/")
  }
}
