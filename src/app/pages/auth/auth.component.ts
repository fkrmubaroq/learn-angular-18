import { toast } from '@/app/services/toast.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  imports: [RouterLink]
})
export class AuthComponent {
    private router = inject(Router)
    user = {
        email: "",
        password: ""
    }
    constructor(){
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user") as string
        if(!token){
            this.router.navigateByUrl("/auth/login");
            return;
        }
        this.user = JSON.parse(user)
    }

    logout(){
        localStorage.removeItem("token")
        toast("Logout successfully")
        this.router.navigateByUrl("/auth/login")
    }
}
