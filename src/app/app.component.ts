import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonBackComponent } from './components/button/button-back.component';
import { HeaderComponent } from './components/header/header.component';
import { toast } from './services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ButtonBackComponent],
  templateUrl:'./app.component.html',
})
export class AppComponent {
  title = 'xxx';
  protected readonly toast = toast;
  
}
