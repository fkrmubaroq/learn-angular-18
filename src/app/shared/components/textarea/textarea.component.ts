import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-textarea',
  standalone: true,
  imports: [],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() class: string = '';
  @Output() onChange: EventEmitter<Event> = new EventEmitter<Event>();

  onInputChange(event: Event): void {
    this.onChange.emit(event);
  }
}
