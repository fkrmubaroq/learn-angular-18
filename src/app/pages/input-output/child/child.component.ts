import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styles: ``
})
export class ChildComponent {
  @Input() message = '';
  @Input() childMessage = '';
  input = '';
  sendBack = output<string>();
  
  onSendBack(){
    this.sendBack.emit(this.input);
  }
}
