import { toast } from "@/app/services/toast.service";
import { InputComponent } from "@/app/shared/components/input/input.component";
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, RouterLink],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  private router = inject(Router)
  form = {
    email: "",
    password: ""
  }

  login(){
    const userStore = localStorage.getItem("user")
    if(!userStore){
      toast("Username atau password salah")
      return;
    }
    const user = JSON.parse(userStore)
    if(user.email !== this.form.email || user.password !== this.form.password){
      toast("Username atau password salah")
      return;
    }
    localStorage.setItem("token", "1234567890")
    this.router.navigateByUrl("/auth")
  }

  onChange(event: Event){
    const target = event.target as HTMLInputElement
    this.form[target.name as keyof typeof this.form] = target.value
  }
}
