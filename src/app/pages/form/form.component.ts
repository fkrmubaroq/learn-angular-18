import { Component, signal } from '@angular/core';
import { toast } from '../../services/toast.service';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  form = signal({
    username: '',
    password: '',
  });

  onChangeInput(field:"username" | "password",event: Event): void {
    const target = event.target as HTMLInputElement;
    this.form.update(values => ({
      ...values,
      [field]: target.value
    }))

    console.log(this.form())
  }

  onSubmit(event:Event){
    event.preventDefault();
    toast("Message")
  }
}
