import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styles: ``
})
export class ParentComponent {
  childMessage = "";
  test = '';
  onSendBack(message:string){
    this.childMessage = message;
  }
}
