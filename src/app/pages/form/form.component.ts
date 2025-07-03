import { Component, signal } from '@angular/core';
import { FormFeedbackComponent } from '../../components/text/form-feedback/form-feedback.component';
import { toast } from '../../services/toast.service';

@Component({
  selector: 'app-form',
  imports: [FormFeedbackComponent],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  form = signal({
    username: '',
    password: '',
  });
  isValidated = signal(false);

  onChangeInput(field: 'username' | 'password', event: Event): void {
    const target = event.target as HTMLInputElement;
    this.form.update((values) => ({
      ...values,
      [field]: target.value,
    }));

    console.log(this.form());
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.isValidated.set(true);
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) return;

    const formValue = this.form();
    if (!formValue.username || !formValue.password) {
    }
    toast('Successfully login');
  }
}
