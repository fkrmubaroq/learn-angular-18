import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() class: string = '';
  @Input() onChange: (event: Event) => void = () => {};
}
