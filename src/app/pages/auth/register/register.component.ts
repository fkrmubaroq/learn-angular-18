import { InputComponent } from "@/app/shared/components/input/input.component";
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent, RouterLink],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  private router = inject(Router)
  form = {
    email: "",
    password: ""
  }

  register(){
    localStorage.setItem("user", JSON.stringify(this.form))
    this.router.navigateByUrl("/auth/login")
  }

  onChange(event: Event){
    const target = event.target as HTMLInputElement
    console.log(target.name)
    this.form[target.name as keyof typeof this.form] = target.value
  }
}
