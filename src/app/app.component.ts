import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <app-header />
  <main>
    <router-outlet />
  </main>
  `,
  styles: [
    `
      p{
        background-color:red;
      }
    `
  ],
})
export class AppComponent {
  title = 'xxx';
}

console.log(new AppComponent())