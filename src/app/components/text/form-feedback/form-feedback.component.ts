import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-feedback',
  standalone: true,
  templateUrl: './form-feedback.component.html',
})
export class FormFeedbackComponent {
  @Input({ required:true }) text!:string;
}
