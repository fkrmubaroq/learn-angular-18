import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styles: ``
})
export class InputComponent {
  form = signal({
    username:"",
    password:"",
  })
}
