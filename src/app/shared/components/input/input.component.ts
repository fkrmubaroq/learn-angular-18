import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() onChange: EventEmitter<Event> = new EventEmitter<Event>();

  onInput(event: Event){
    this.onChange.emit(event)
  }
}
